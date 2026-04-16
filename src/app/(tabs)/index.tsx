import CompletedItems from '@/components/list/CompletedItems';
import ListHeroCard from '@/components/list/ListHeroCard';
import PendingItemCard from '@/components/list/PendingItemCard';
import TabScreenBackground from '@/components/TabScreenBackground';
import useGroceryStore from '@/store/grocery-store';
import { FontAwesome6 } from '@expo/vector-icons';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ListScreen() {
  const { items } = useGroceryStore();
  const pendingItems = items.filter(item => !item.purchased);

  return (
    <SafeAreaView className="flex-1" edges={['top']}>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, gap: 14 }}
      >
        <TabScreenBackground />
        <ListHeroCard />
        <View className="flex-row items-center justify-between px-1">
          <Text className="text-sm text-muted-foreground font-semibold uppercase tracking-[1px]">
            Shopping Items
          </Text>
          <Text className="text-sm text-muted-foreground">{pendingItems.length} active</Text>
        </View>

        {pendingItems.length === 0 ? (
          <View className="rounded-3xl border border-border bg-card p-8 items-center gap-3">
            <View className="size-14 rounded-full bg-muted items-center justify-center">
              <FontAwesome6 name="basket-shopping" size={24} color="#3b5a4a" />
            </View>
            <Text className="text-base font-semibold text-card-foreground">All caught up!</Text>
            <Text className="text-sm text-muted-foreground text-center">
              No pending items. Add something to your list to get started.
            </Text>
          </View>
        ) : (
          // pendingItems.map(item => <PendingItemCard key={item.id} item={item} />)
          <FlatList
            data={pendingItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PendingItemCard item={item} />}
            contentContainerStyle={{ gap: 14 }}
          />
        )}
        <CompletedItems />
      </ScrollView>
    </SafeAreaView>
  );
}
