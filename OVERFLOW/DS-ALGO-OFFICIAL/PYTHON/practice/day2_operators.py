mealCost = float(input())
tipPercent = int(input())
taxPercent = int(input())

totalCost = mealCost + (mealCost * (tipPercent / 100)) + (mealCost * (taxPercent / 100))

print("The total meal cost is", round(totalCost), "dollars.")
