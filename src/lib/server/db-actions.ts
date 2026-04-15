import { desc, eq } from 'drizzle-orm';
import { db } from './db/client';
import { groceryItems } from './db/schema';

//* Fetch all grocery items from the database, ordered by last updated time (latest first)
export const listGroceryItems = async () => {
  const rows = await db.select().from(groceryItems).orderBy(desc(groceryItems.updated_at));

  return rows;
};

//* Create a new grocery item with provided input and default values
export const createGroceryItem = async (input: {
  name: string;
  category: string;
  quantity: number;
  priority: string;
}) => {
  const rows = await db
    .insert(groceryItems)
    .values({
      id: crypto.randomUUID(),
      name: input.name,
      category: input.category,
      quantity: Math.max(1, input.quantity),
      purchased: false,
      priority: input.priority,
      updated_at: Date.now(),
    })
    .returning();

  return rows[0];
};

//* Update the purchased status of a specific grocery item by ID
export const setGroceryItemPurchased = async (id: string, purchased: boolean) => {
  const rows = await db
    .update(groceryItems)
    .set({ purchased, updated_at: Date.now() })
    .where(eq(groceryItems.id, id))
    .returning();

  if (!rows.length) return null;

  return rows[0];
};

//* Update the quantity of a specific grocery item by ID
export const updateGroceryItemQuantity = async (id: string, quantity: number) => {
  const rows = await db
    .update(groceryItems)
    .set({ quantity: Math.max(1, Math.floor(quantity)), updated_at: Date.now() })
    .where(eq(groceryItems.id, id))
    .returning();

  if (!rows.length) return null;

  return rows[0];
};

//* Delete a specific grocery item by ID
export const deleteGroceryItem = async (id: string) => {
  await db.delete(groceryItems).where(eq(groceryItems.id, id));
};

//* Delete all grocery items that have been purchased
export const clearPurchasedItems = async () => {
  await db.delete(groceryItems).where(eq(groceryItems.purchased, true));
};
