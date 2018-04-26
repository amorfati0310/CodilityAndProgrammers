# Stacks and Queues


## Stack
stack push pop구조 쌓이는 구조 

스택은 젠가 같이 위로 놓는 걸로 생각 쌓이는 구조 

```python
stack = [0] * N
 size = 0
 def push(x):
 global size
 stack[size] = x
 size += 1
 def pop():
 global size
 size -= 1
 return stack[size]
```

## Queue

큐는 ----일렬로 줄 서는 것을 생각 

버스 줄 앞에 사람이 먼저 타고 뒤에 사람이 늦게 탄다. 
뒤에 것은 맨 뒤에 붙는다. 

```python
queue = [0] * N
head, tail = 0, 0
def push(x):
  global tail
  tail = (tail + 1) % N
  queue[tail] = x
def pop():
  global head
  head = (head + 1) % N
  return queue[head]
def size():
  return (tail - head + N) % N
def empty():
  return head == tail

```