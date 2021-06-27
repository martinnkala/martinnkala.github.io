import math 

n = float(input("What is the length of the pendulum in (meters)? "))
t = 2 * math.pi * math.sqrt(n /9.81)
print(f"Time (seconds): {t:.2f}")
