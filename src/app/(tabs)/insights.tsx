import ClearCompletedButton from '@/components/insights/ClearCompletedButton';
import InsightsCategorySection from '@/components/insights/InsightsCategorySection';
import InsightsPrioritySection from '@/components/insights/InsightsPrioritySection';
import InsightsStatsSection from '@/components/insights/InsightsStatsSection';
import UserProfile from '@/components/insights/UserProfile';
import TabScreenBackground from '@/components/TabScreenBackground';
import React from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const InsightsScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      className="flex-1 bg-background py-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14, paddingTop: insets.top }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <TabScreenBackground />
      <UserProfile />
      <InsightsStatsSection />
      <InsightsCategorySection />
      <InsightsPrioritySection />
      <ClearCompletedButton />
    </ScrollView>
  );
};

export default InsightsScreen;
