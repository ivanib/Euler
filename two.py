total = 0

def fib(n):
    if n == 0:
        return 1
    elif n == 1:
        return 2

    return fib(n-1) + fib(n-2)


x = 0
while fib(x) < 4000000:
    fibval = fib(x)
    if fibval % 2 == 0:
        total += fibval

    x += 1

print(total)

# fib(2) == fib(1) + fib(0)
# fib(n) == fib(n-1) + fib(n-2)
