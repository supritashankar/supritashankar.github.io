---
layout: post
title:  "Get To the Point: Summarization with Pointer-Generator Networks"
date:   2019-03-28
categories: [NLP, QA, DL]
---

Let's briefly look at [Summarization with Pointer-Generator Networks](https://arxiv.org/abs/1704.04368) by Abigail See* etc.

Specifically, we will be looking at the Coverage mechanism.



### Summarization with Pointer-Generator Networks 

##### Paper aims to solve 2 problems with summarization
- Produce factual details correctly (do not copy from the text correctly)
- Repeat themselves.


##### Proposed solutions
- Pointer-generator network that can copy words from the source text via pointing.
- Coverage - To keep track of what has been summarized so far - to avoid repeating


##### 2.3 Coverage Mechanism
- Coverage vector c(t) is the sum of attention distributions over all the previous decoder timesteps.
- Coverage vector is used as an extra input to the attention mechansim
- This ensures that the atttention mechanism's current decision is informed by a reminder of its previous decisions.
  This should make it easier for the attention mechanism to avoid repeatedly attending to the same locations, and
  thus avoid generating repetitive text.
- Coverage loss is used to penalize attending to same location.

##### Training experiments and details 
- Trained coverage model without the the loss function, hoping that attention mechanism may learn by itself not to
  attend repeatedly to the same locations, but this was found to be ineffective - there was no discernable reduction   in repetition.
- Tried training coverage from the first iteration rather than as a seperate training phase, but found that in the
  early phase of training, the coverage objective interfered with the main objective, reducing overall perf.



*PS: Yay to Abi! The paper was fun to read.