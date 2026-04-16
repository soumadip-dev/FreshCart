import { View } from 'react-native';

export default function TabScreenBackground() {
  return (
    <>
      <View className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-primary/80 dark:bg-background/40" />
      <View className="absolute right-[-74px] top-40 h-72 w-72 rounded-full bg-primary/70 dark:bg-background/35" />
    </>
  );
}
