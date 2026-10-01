---
title: "LUMOS - Research"
layout: textlay
research_layout: true
excerpt: "LUMOS -- Research"
sitemap: false
permalink: /research/
---


{% include research_gallery_assets.html %}

<div class="research-highlights" markdown="1">

### Research Highlights

At the Lab for Urban Mobility Systems (LUMOS), we develop data-driven models and decision-making methods for transportation and logistics systems. Our research integrates reinforcement learning with mathematical optimisation and transport system and behaviour modelling to address decisions ranging from long-term infrastructure planning to real-time operations. Our research areas span autonomous transportation, shared mobility, congestion management, public transport, smart logistics, and air transport, with the goal of improving efficiency, equity, and reliability. We also explore how large language models can enrich our understanding of travel behaviour.

**Core methodologies: Data-driven optimisation · Reinforcement learning · Learning–optimisation integration · Machine learning · Large language models (LLMs) · Transport System and Behavior Modelling.**

---

<div class="research-topic" markdown="1">

### Planning and Operations of Autonomous Transportation Systems

<div class="research-topic-body" markdown="1">

{% include research_figures.html id="autonomous-transport" images="homogeneity_based_mean_field_drl_framework.png|equitable_hybrid_intersection_design.png" descriptions="Adaptive routing with mean-field deep reinforcement learning|Equitable hybrid intersection design" %}

<div class="research-topic-copy" markdown="1">

Connected and autonomous vehicles (CAVs) create new opportunities for coordinated mobility. Their coexistence with human-driven vehicles also raises questions about how road infrastructure should be designed, how vehicles should respond to changing traffic conditions, and how the benefits of automation can be shared across travellers.

We study the deployment of dedicated CAV corridors and signal-free smart intersections using optimisation models that account for travellers’ route choices and distributional welfare impacts. Our research examines how infrastructure investment and road-space allocation affect both network performance and different user groups, including human-driven vehicle users.

At the operational level, we develop reinforcement learning approaches for adaptive routing and coordination in stochastic traffic networks. We investigate how vehicles can make effective decisions under uncertain travel conditions and limited communication, connecting individual decisions with network-wide performance. Together, these efforts link infrastructure design with real-time decision-making for efficient and equitable autonomous transportation.

</div>
</div>
</div>

---

<div class="research-topic" markdown="1">

### Design and Management of Urban Mobility Systems

<div class="research-topic-body" markdown="1">

{% include research_figures.html id="urban-mobility" images="learning_informed_optimization_saevs.png|senior_centric_type_matching_framework.jpg" descriptions="Learning-informed optimisation for shared autonomous electric vehicles|Dynamic senior-centric type matching for mobility-on-demand management" %}

<div class="research-topic-copy" markdown="1">

Shared mobility services must respond to changing demand while coordinating vehicles, charging resources, and infrastructure. We develop data-driven optimisation and reinforcement learning approaches to support these interdependent decisions in shared electric and autonomous vehicle systems, as well as mobility-on-demand services with mixed autonomous and human-driven fleets.

Our operational research addresses vehicle assignment, matching, rebalancing, charging, and user incentives. By combining learning with optimisation, we seek to anticipate future demand and resource availability while making timely decisions under uncertainty. These models account for interactions among travellers, human drivers, and service operators.

At the planning level, we study fleet sizing and charging infrastructure deployment in conjunction with operational decisions. Connecting long-term investment with day-to-day management helps identify how shared mobility systems can use resources effectively and provide reliable services.

We also study older adults’ mobility patterns and activities to understand how their travel needs vary across individuals, locations, and times of day. Using data-driven analysis and travel behaviour modelling, we examine differences in travel patterns and their implications for service accessibility. Building on these insights, we investigate senior-centric mobility services, including dynamic matching in mobility-on-demand systems, to better align service provision with older travellers’ needs and support accessible and inclusive urban mobility in ageing societies.

</div>
</div>
</div>

---

<div class="research-topic" markdown="1">

### Congestion Management and Travel Information

<div class="research-topic-body" markdown="1">

{% include research_figures.html id="congestion-management" images="traveller_preferences_and_information.png|congestion.png" descriptions="Heterogeneous traveller preferences and travel information|Congestion management and information provision in connected networks" %}

<div class="research-topic-copy" markdown="1">

Congestion emerges from the interactions of individual travel decisions across a network. We study how pricing and travel information can influence these decisions and improve system performance, accounting for uncertainty and differences in travellers’ preferences and access to information.

Our research combines behavioural and network equilibrium models with game theory to examine route choice, departure-time choice, and the strategic decisions of information providers. We investigate when information helps relieve congestion, when it can have unintended effects, and how it can be coordinated with congestion pricing.

We also develop data-driven and reinforcement learning approaches for traffic management, including incident-responsive information dissemination. By integrating learning, optimisation, and traffic simulation, we study how guidance strategies can adapt to changing network conditions while accounting for travellers’ responses.

</div>
</div>
</div>

---

<div class="research-topic" markdown="1">

### AI for Public Transport

<div class="research-topic-body" markdown="1">

{% include research_figures.html id="public-transport" images="smart_card_travel_pattern_analysis.png" descriptions="Smart card travel pattern analysis for public transport" %}

<div class="research-topic-copy" markdown="1">

We explore how artificial intelligence can support the planning and management of public transport systems that respond to changing demand and diverse passenger needs. Our focus is on connecting data-driven insights into travel patterns with decisions about service capacity, resource allocation, and passenger flows.

Building on our work on transit mobility patterns, train capacity optimisation, and passenger flow management, we investigate how machine learning and optimisation can inform service design and operational adjustments. We also explore reinforcement learning for sequential decisions under uncertain demand, with attention to the interactions between passenger behaviour and service performance.

An important objective is to support accessible and inclusive public transport, including the mobility needs of older adults. By integrating transport system and behaviour modelling with AI methods, we aim to improve service responsiveness, reliability, and the use of available capacity.

</div>
</div>
</div>

---

<div class="research-topic" markdown="1">

### Smart Logistics and Air Transport

<div class="research-topic-body" markdown="1">

{% include research_figures.html id="logistics-air-transport" images="delivery_pickup_dispatch_workflow.png" descriptions="Truck-drone delivery and pickup dispatch workflow" %}

<div class="research-topic-copy" markdown="1">

Our research on smart logistics and air transport addresses the coordination of vehicles, services, and resources across ground and aerial networks. We connect routing and scheduling decisions with changing demand and operational constraints to support efficient and reliable movements of goods and people.

In smart logistics, our work includes coordinated truck–drone routing for scheduled deliveries and on-demand pickups. We study how routing and service decisions can adapt to new requests while accounting for time constraints and the interdependence of ground and aerial operations.

In air transport, we explore drone applications beyond delivery, including surveillance, infrastructure inspection, and emergency response. These applications require timely deployment, adaptive routing, and coordination under uncertain and rapidly changing conditions. We investigate how data-driven optimisation and reinforcement learning can support mission planning, drone scheduling, and resource allocation, with the aim of improving operational coverage and responsiveness.

</div>
</div>
</div>

---

<div class="research-topic" markdown="1">

### Large Language Models for Travel Behaviour Modelling

<div class="research-topic-body" markdown="1">

{% include research_figures.html id="llm-travel-behaviour" images="llm_travel_behavior_modeling.png" descriptions="Large language models for travel behaviour modelling" %}

<div class="research-topic-copy" markdown="1">

Travel choices reflect individual preferences, habits, past experiences, and situational context. We explore how large language models (LLMs) can represent these factors and complement established travel behaviour theory and econometric modelling.

One direction investigates behavioural data augmentation: whether LLM-generated responses grounded in empirical observations can support analysis when survey data are limited or emerging mobility scenarios are difficult to observe. We examine their potential for studying travel preferences and policy responses, with attention to behavioural validity and estimation bias.

A second direction explores richer representations of travellers by combining structured attributes with natural-language descriptions of attitudes, routines, and circumstances. We investigate whether these representations can help explain behavioural heterogeneity and differences in responses to transport alternatives.

Through these directions, we aim to establish when and how LLMs can contribute to data-efficient behavioural modelling, with empirical validation central to assessing their usefulness for transportation planning and policy evaluation.

</div>
</div>
</div>

---

<div class="research-topic" markdown="1">

### Data-Driven Intelligent Traffic Diffusion Plan Generation

<div class="research-topic-body" markdown="1">

{% include research_figures.html id="traffic-diffusion" images="traffic_incident_severity_assessment.jpeg|rl_traffic_information_dissemination_simulation.jpeg" descriptions="Simulation and deep learning for traffic incident severity assessment|Reinforcement learning for traffic information dissemination in simulation" %}

<div class="research-topic-copy" markdown="1">

We collaborated with ST Engineering on an artificial intelligence research program with the goal of building a people-centric, smart future for Singapore. Our project, “Intelligent Traffic Diffusion Plan Generation, Effective Assessment and Dissemination Strategies, aims to develop a framework to dynamically generate effective traffic diffusion plans as well as dissemination strategies to distribute guidance information to drivers in a timely manner. Intelligent tools, such as machine learning, deep reinforcement learning, traffic simulation, and optimization techniques, are used in this project.

In many cities, including Singapore, traffic information, such as accident notifications and travel time, is displayed on vehicle on-board units, electronic signboards situated along the expressways or broadcast periodically over the radio and social media channels. In line with the Smart Nation initiative, this project implements smart solutions to transform the way such traffic information is generated and disseminated.

To provide accurate and personalized traffic information to drivers, a response plan system based on deep reinforcement learning is being developed. With reinforcement learning, optimal dissemination strategies can be employed for different road segments affected by accidents and congestions, such that the total traffic delay across the entire road network is minimized. When an accident occurs, information, such as alternative route suggestions, can be generated. This information, along with the incident alert, can be sent directly to individual cell phones and in-vehicle units within an affected zone. This ensures that drivers have access to real-time, personalized information. Drivers will be able to avoid congested roads while the overall network congestion is reduced. The intelligent response plan system developed in this project is a significant improvement over the traditional method.

</div>
</div>
</div>

</div>

---

### Future Directions
<div style="text-align:justify">
As our transportation system grows in capacity and usage, it becomes increasingly important to manage traffic congestion and promote smart and sustainable technological development. Built upon prior research findings and unique expertise, the lab will continue to pursue its goals and improve the transportation system performance in terms of planning, design, operations, and management. Key lines of future research are
</div>
- future urban mobility systems
- smart infrastructure and data-driven congestion management
- information provision in connected transportation networks.

----
### Acknowledgement
Our research work is supported by the Singapore Ministry of Education, National Research Foundation, Land Transport Authority, Urban Redevelopment Authority, A*STAR, Cisco Systems and ST Engineering.

<br>
