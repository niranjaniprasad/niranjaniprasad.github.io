---
layout: post
title: Adaptive Speaker Recognition
description: Master's Thesis - Adaptive Speaker Recognition
img: /img/img16.jpg
---

<img class="col one right" src="/img/nao_hearing.png">


This project involves the design and development of an adaptive speaker recognition algorithm, tailored for implementation in the Nao domestic service robot. It is targeted at the Chinese market, as an extension to conventional smart home solutions. 

The problem can be defined as text independent open set identification: the proposed algorithm distinguishes between a small set of known speakers, and identifies a new speaker as unknown. It is designed to operate in real time and adapt to changes in the voices of the registered speakers. 

Various signal processing methods are explored to make system robust to both background disturbances and internal robot noise. UBM-GMM speaker models trained from MFCC features comprise the core of a maximum-likelihood based identification system, with MAP adaptation to address session variability and speaker drift. 
The proposed strategy achieves an identification rate of 90% and a rejection accuracy of 64%, and laid the foundation for continued work on implementation of a robust system in the robot.

[[MEng Thesis](../../docs/IIBReport.pdf)] - *Advised by Professor Elena Punskaya and Jingdong Chen*
