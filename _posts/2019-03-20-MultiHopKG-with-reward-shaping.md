---
layout: post
title:  "MultiHop Knowledge Graph Reasoning with Reward Shaping"
date:   2019-02-20
categories: [NLP, QA, DL, RL]
---

This post is a brief summary of the paper - [MultiHopKG Reasoning with Reward Shaping](https://arxiv.org/abs/1808.10568)


Inspired by the MINERVA paper - this paper addresses two main issues of a KG 
- Incompleteness
- Path diversity (expecting the model to explore new
paths and not be incentivized to explore the same path everytime). 
 
To address this, they propose to use Reward Shaping for
incompleteness and Action Dropout for the path diversity. Reward Shaping - In the Minerva paper, they use a binary value of 0/1
if the model finds the right path. In this case, the propose Soft correctness ranging between 0 and 1 ("uses KG embeddings for this. estimate a soft reward
for target entities whose correctness is unknown")
Action dropout's motivation is similar to that of dropout. It is implemented to avoid overfitting. "Action dropout" randomly
masks some outgoing edges for the agent.

Quick facts
- Mostly uses 2-3 hop questions.
- This performs best on denser Knowledge Graphs like Kinship and UMLS than NELL
- They use Mean Reciprocal Rank for evaluating KB's

Results
- This paper achieves as good results as ConvE and has significant gains over MINERVA

Thoughts
- If you want to reduce the noise in your KG or make it more complete - consider implementing the above.
- If you have a sparse KG - then it might be more exploratory on whether it would work.
- Think about how many hops would work for you. (This works best for 2-3 hops)
- Why not use ConvE or TransE - they seem to have better results? - The reason is, using KG embeddings reduces the interpretability
of "reasoning". Given two entities in the KG - they are represented as vectors and a maximum likehood score is calculated.
Whereas in the above we do reasoning over discrete structures.

