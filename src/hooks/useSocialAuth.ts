import { useSSO } from '@clerk/expo';
import { useState } from 'react';
import { Alert } from 'react-native';

export default function useSocialAuth() {
  const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (strategy: 'oauth_google' | 'oauth_apple') => {
    if (loadingStrategy) return;
    setLoadingStrategy(strategy);

    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
      });

      if (!createdSessionId || !setActive) {
        Alert.alert('Sign-in failed', 'Unable to create session. Please try again.');
        return;
      }

      await setActive({ session: createdSessionId });
    } catch (error) {
      console.log('💥 SSO Error:', error);
      Alert.alert('Error', 'Authentication failed. Please try again.');
    } finally {
      setLoadingStrategy(null);
    }
  };

  return { handleSocialAuth, loadingStrategy };
}
