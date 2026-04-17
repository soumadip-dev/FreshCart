import CompletedItems from '@/components/list/CompletedItems';
import ListHeroCard from '@/components/list/ListHeroCard';
import PendingItemCard from '@/components/list/PendingItemCard';
import TabScreenBackground from '@/components/TabScreenBackground';
import useGroceryStore from '@/store/grocery-store';
import { FontAwesome6 } from '@expo/vector-icons';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ListScreen() {
  const { items } = useGroceryStore();
  const pendingItems = items.filter(item => !item.purchased);

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <TabScreenBackground />

      <FlatList
        data={pendingItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View className="mb-3">
            <PendingItemCard item={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 24,
        }}
        ListHeaderComponent={
          <View className="gap-4 mb-4">
            <ListHeroCard />

            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-muted-foreground font-semibold uppercase tracking-[1px]">
                Shopping Items
              </Text>
              <Text className="text-sm text-muted-foreground">{pendingItems.length} active</Text>
            </View>

            {pendingItems.length === 0 && (
              <View className="rounded-3xl border border-border bg-card p-6 items-center">
                <View className="size-14 rounded-full bg-muted items-center justify-center mb-3">
                  <FontAwesome6 name="basket-shopping" size={24} color="#3b5a4a" />
                </View>

                <Text className="text-base font-semibold text-card-foreground mb-1">
                  All caught up!
                </Text>

                <Text className="text-sm text-muted-foreground text-center leading-5">
                  No pending items. Add something to your list to get started.
                </Text>
              </View>
            )}
          </View>
        }
        ListFooterComponent={
          <View className="mt-2">
            <CompletedItems />
          </View>
        }
      />
    </SafeAreaView>
  );
}
