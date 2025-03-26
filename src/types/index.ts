interface User {
  id: string;
  name: string;
  preferences: {
    dietaryRestrictions: string[];
    allergies: string[];
    goals: "weightLoss" | "muscleGain" | "dietaryTransition";
    favoriteIngredients: string[];
  };
  metrics: {
    weight: number;
    height: number;
    activityLevel: "low" | "medium" | "high";
  };
  subscription: "free" | "premium";
}

interface Recipe {
  id: string;
  name: string;
  ingredients: {
    name: string;
    amount: number;
    unit: string;
  }[];
  instructions: string[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  difficulty: "easy" | "medium" | "hard";
  prepTime: number;
  isPremium: boolean;
}

interface MealPlan {
  userId: string;
  startDate: Date;
  endDate: Date;
  meals: {
    date: Date;
    recipes: Recipe[];
  }[];
  shoppingList: {
    name: string;
    amount: number;
    unit: string;
  }[];
}

class MealPlanGenerator {
  async generatePlan(user: User): Promise<MealPlan> {
    // Logique pour générer un plan personnalisé
    // en fonction des préférences utilisateur
  }

  async generateShoppingList(mealPlan: MealPlan): Promise<Ingredient[]> {
    // Agrégation des ingrédients nécessaires
    // avec gestion des quantités
  }

  suggestSubstitutions(
    ingredient: Ingredient,
    userPreferences: User["preferences"]
  ): Ingredient[] {
    // Proposition d'alternatives adaptées
  }
}
