---
title: "LUMOS - Research"
layout: textlay
excerpt: "LUMOS - Research"
sitemap: false
permalink: /research/
----

# Research Highlights

----

![]({{ site.url }}{{ site.baseurl }}/images/respic/ridesharing.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Shared Mobility System Design and Operations
<div style="text-align: justify">
Shared mobility has been widely recognized as an efficient means to efficiently promote resource utilization and improve our standards of living. The lab develops research on shared autonomous electric vehicle systems, mixed f leet mobility-on-demand (MoD) systems with autonomous vehicles (AVs) and conventional vehicles (CVs), ridesharing and ride-hailing systems, and bike-sharing systems.
We study two fundamental problems: long-run infrastructure design and short-run operational decisions and strategies for shared mobility systems. At the short-run operational level, we investigate optimal operational decisions and strategies, such as dynamic pricing and incentives, en-route matching, vehicle relay, and vehicle rebalancing, to improve the system efficiency and the level of service. For electric carsharing systems, we propose a space–time–battery network to explicitly track the battery states of vehicles. Efficient algorithms are developed to make optimal vehicle routing, assignment, and charging decisions quickly. Relay strategies are also proposed to address the “range anxiety” caused by the limited battery capacity of electric vehicles. By leveraging historical and online data, we propose a data-driven approach to implementing real-time
operational strategies for carsharing systems in terms of vehicle assignment, relocation, and user incentive decisions. With the development of autonomous driving technology, a shared autonomous electric vehicle system is expected to be a promising transportation mode in the future. We further develop a two-sided deep reinforcement learning approach for dynamically managing MoD systems with a mixed autonomy of AVs and CVs (Figure 2), while human drivers’ behavior and uncertainty in trip requests are fully considered. The proposed approach is demonstrated us-
ing a case study in New York City, and our algorithms can make real-time, high-quality decisions. Efficient algorithms are developed to make these high-quality decisions quickly.
At the long-run infrastructure planning and design level, we focus on the design of infrastructure (i.e., fleet size, station capabilities, and multitype charging facility configurations) and the impacts of a sharing economy on road congestion. The optimal deployment of a charging infrastructure should consider its impact on the level of service at the operational level. To achieve this goal, we develop a two-stage stochastic program to integrate and optimize decision making at the planning and operational levels simultaneously. Numerical experiments in a large-scale case reveal the effectiveness of the optimal deployment of a multitype charging infrastructure in terms of system profit and performance. Meanwhile, the long-run implications of ridesharing on traffic congestion distribution over time and space are investigated using an equilibrium approach. We found that ridesharing is generally effective in relieving congestion, but it may also worsen congestion in certain areas. Also, our work reveals that ridesharing does reshape the traffic congestion evolution patterns over time during peak hours. Based on these results, we propose a joint design of compensation and congestion pricing schemes to reduce congestion and improve social welfare.
</div>
----

![]({{ site.url }}{{ site.baseurl }}/images/respic/ridesharing.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Smart Congestion Management and Information Provision
<div style="text-align: justify">
The past decades have witnessed the rapid development of information technologies in transportation sys-
tems. The dissemination of real-time travel information may guide travelers to choose modes and routes and schedule their trips to reduce travel times. We study information provision and develop modeling frameworks to predict the impacts of pretrip information and en-route information.
Pre-trip information provision has been widely recognized as an effective instrument to relieve road congestion. We examine the implications of pretrip information on route choices, departure time choices, individual and social welfare, and congestion. We found that an information paradox may occur: additional information may not necessarily reduce congestion. In some instances, even though free information would deteriorate the system performance, a proper design of congestion pricing and information price could relieve road congestion. Considering the heterogeneous travel information provided by different information providers (IPs), we further examine the strategic interactions between IPs and users’ route choices using a “leader–follower” game. IPs (leaders)
compete or cooperate to determine the optimal set of information to maximize their profits, and travelers (followers) choose their routes based on the information set they obtain. Our results show that IPs’ cooperation can reduce congestion and make the IPs better off.
Recognizing that connected autonomous vehicle (CAV) technology will bring new opportunities to improve smart congestion management via information provision, we develop modeling frameworks to consider CAV technology. We consider a more general situation, in which travelers receive en-route information in real time, so that the negative impact of uncertainties can be further reduced. As illustrated in Figure 3, we consider a mixed-traffic flow with both connected vehicles and regular vehicles (RVs). We also propose modeling frameworks to explicitly describe the different characteristics of CAVs and RVs in the information acquisition process and predict the travelers’ heterogeneous routing and information decisions due to their technological differences. Furthermore, we investigate the impacts of information quality and CAV automation levels on the CAV market penetration and spatial distribution of congestion. It is found that the travel time saving from CAV technology and high-quality information is more pronounced for long trips and congested networks.
Our studies in information provision highlight the importance of adequately designing an information scheme and integrating it with existing congestion management instruments, such as congestion pricing. Providing perfect and full information to travelers may not always reduce congestion. To strategically design information provision to mitigate congestion, travelers’ responses to information must be captured accurately. Our modeling frameworks serve as the fundamental basis. Experiments demonstrate that information can generally reduce congestion if the information is disseminated to the proper locations and travelers at the appropriate time. However, congestion cannot be minimized by providing traffic information. Joint implementation of an information and congestion pricing scheme can achieve this goal. A network-wide information provision and congestion pricing scheme is desirable to optimize system-wide congestion under travel time uncertainty.
</div>
----

![]({{ site.url }}{{ site.baseurl }}/images/respic/ridesharing.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Data-Driven Intelligent Traffic Diffusion Plan Generation 
<div style="text-align:justify">
Beginning in May 2020, we have been collaborating with ST Engineering on an artificial intelligence research program with the goal of building a people-centric, smart future for Singapore. Our project, “Intelligent Traffic Diffusion Plan Generation, Effective Assessment and Dissemination Strategies, aims to develop a framework to dynamically generate effective traffic diffusion plans as well as
FIG 4 Simulating lane-changing behavior in response to information displayed on an electronic signboard (top left).
 dissemination strategies to distribute guidance information to drivers in a timely manner. Intelligent tools, such as machine learning, deep reinforcement learning, traffic simulation, and optimization techniques, are used in this project.
In many cities, including Singapore, traffic information, such as accident notifications, is displayed on electronic signboards situated along the expressways or broadcast periodically over the radio and social media channels (Figure 4). In line with the Smart Nation initiative, this project implements smart solutions to transform the way such traffic information is generated and disseminated.
To provide accurate and personalized traffic information to drivers, a response plan system based on deep reinforcement learning is being developed. With reinforcement learning, optimal dissemination strategies can be employed for different road segments affected by accidents and congestions, such that the total traffic delay across the entire road network is minimized. When an accident occurs, information, such as alternative route suggestions, can be generated. This information, along with the incident alert, can be sent directly to individual cell phones and in-vehicle units within an affected zone. This ensures that drivers have access to real-time, personalized information.
Drivers will be able to avoid congested roads while the overall network congestion is reduced. The intelligent response plan system developed in this project is a significant improvement over the traditional method.
</div>
----

## Future Directions
<div style="text-align:justify">
As our transportation system grows in capacity and usage, it becomes increasingly important to manage traffic congestion and promote smart and sustainable technological development. Built upon prior research findings and unique expertise, the lab will continue to pursue its goals and improve the transportation system performance in terms of planning, design, operations, and management. Key lines of future research are
- future urban mobility systems
- smart infrastructure and data-driven congestion management
- information provision in connected transportation networks.

</div>
----
