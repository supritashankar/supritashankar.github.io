---
layout: post
title:  "Memory networks"
date:   2019-03-28
categories: [NLP, QA, DL]
---

In this post, we will study about Memory networks briefly.

We will mainly be looking at [Memory Networks](https://arxiv.org/abs/1410.3916) and [End-to-end memory networks](https://arxiv.org/abs/1503.08895)



### Memory networks paper summary 

Memory Networks combine inference components with a long-term memory component.
Used in the context of Question Answering (QA) with memory component acting as a (dynamic) knowledge base.
Four learnable components
- I - input feature map: Converts input to internal feature representation
- G - generalization: Updates old memory given input x.
- O - the O component is responsible for reading from memory and performing inference. (Calculating what memories to use to perform a good response)
- R - Produces the final response given O.
Efficient memory via hashing: Hash the input into buckets and only score memories in the same bucket.
Hashing via clustering word embeddings performs better than just hashing words.


Thoughts:

- Memory networks outperform both RNN's and LSTM's
- Requires full supervision

### End to End memory networks(MEMN2N) summary

- Reads from memory with soft attention
- Performs multiple lookups (hops) on memory
- E2E training with backprop
- Difference with Memory networks
  - Memory networks uses "Hard attention" vs MEMN2N uses soft attention
  - Requires full supervision vs MEM2NN requires supervision only on the end output
  - Memory networks uses ArgMax vs Softmax in MEMN2N
  - Backprop might be a challenge in Memory networks?
  - Both of these networks are evaluated on the bAbi tasks. There are a total of 20 tasks and each of the task needs a different type of reasoning.
