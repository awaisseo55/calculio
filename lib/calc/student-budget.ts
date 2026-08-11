export interface StudentBudgetInput {
  maintenanceLoan: number;
  parentalContribution: number;
  partTimeJobIncome: number;
  otherIncome: number;
  rent: number;
  food: number;
  bills: number;
  transport: number;
  socialising: number;
  courseCosts: number;
  otherExpenses: number;
}

export interface StudentBudgetResult {
  totalMonthlyIncome: number;
  totalMonthlyExpenses: number;
  monthlySurplus: number;
  annualSurplus: number;
  expenseBreakdown: { label: string; amount: number }[];
}

export function calculateStudentBudget(input: StudentBudgetInput): StudentBudgetResult {
  const income = {
    maintenanceLoan: Math.max(input.maintenanceLoan, 0),
    parentalContribution: Math.max(input.parentalContribution, 0),
    partTimeJobIncome: Math.max(input.partTimeJobIncome, 0),
    otherIncome: Math.max(input.otherIncome, 0),
  };

  const expenses = {
    rent: Math.max(input.rent, 0),
    food: Math.max(input.food, 0),
    bills: Math.max(input.bills, 0),
    transport: Math.max(input.transport, 0),
    socialising: Math.max(input.socialising, 0),
    courseCosts: Math.max(input.courseCosts, 0),
    otherExpenses: Math.max(input.otherExpenses, 0),
  };

  const totalMonthlyIncome = Object.values(income).reduce((sum, v) => sum + v, 0);
  const totalMonthlyExpenses = Object.values(expenses).reduce((sum, v) => sum + v, 0);
  const monthlySurplus = totalMonthlyIncome - totalMonthlyExpenses;

  const expenseBreakdown = [
    { label: "Rent", amount: expenses.rent },
    { label: "Food", amount: expenses.food },
    { label: "Bills", amount: expenses.bills },
    { label: "Transport", amount: expenses.transport },
    { label: "Socialising", amount: expenses.socialising },
    { label: "Course costs", amount: expenses.courseCosts },
    { label: "Other", amount: expenses.otherExpenses },
  ];

  return {
    totalMonthlyIncome,
    totalMonthlyExpenses,
    monthlySurplus,
    annualSurplus: monthlySurplus * 12,
    expenseBreakdown,
  };
}
