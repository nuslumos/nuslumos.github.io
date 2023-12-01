---
title: "LUMOS - Publications"
layout: gridlay
excerpt: "LUMOS -- Publications."
sitemap: false
permalink: /publications/
---


# Publications

---

## Featured

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="row">
 	<img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="25%" style="float: right" />
  <p><a class="pub1" href="{{ publi.link.url }}">{{ publi.title }}</a></p>
  <a class="pub2"> {{ publi.link.display }} </a>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>

---


## Journal

1. Wang, S., Li, X., Chen, Z., Liu, Y. (2023) A Railway Accident Prevention System Using An Intelligent Pilot Vehicle. IEEE Transactions on Intelligent Transportation Systems, Accepted. 
2. Dong, P., Liu, Y., Meng, Q., & Yu, G. (2023) [Reliable Network Design Considering Endogenous Customers’ Choices Under Probabilistic Arc Failures](https://www.tandfonline.com/doi/abs/10.1080/24725854.2023.2209622). IISE Transactions, 1-25.
3. Zhu, D., Xie, T., Liu, Y., Zou, B., Rujeerapaiboon, N. (2023) [Optimal Deployment of an Equitable Cav Platoonable Corridor On Road Networks with Mixed Traffic Flow](https://www.sciencedirect.com/science/article/abs/pii/S0968090X23003893), Transportation Research Part C: Emerging Technologies, 157, 104399.
4.	Chen, E, Liu, Y., Yang, M. (2023) [Revealing Senior Mobility Patterns and Activities in Urban Transit Systems](https://ddec1-0-en-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2fieeexplore.ieee.org%2fdocument%2f10133883&umid=a589eb6b-5378-46fc-bf27-312851148874&auth=8d3ccd473d52f326e51c0f75cb32c9541898e5d5-205c12d3f5973e320626866c45c8fc737f0809b5), IEEE Transactions on Intelligent Transportation Systems, 0(0). 
5.	Gu, R., Liu, Y., and Poon, M. (2023) [Dynamic truck–drone routing problem for scheduled deliveries and on-demand pickups with time-related constraints](https://www.sciencedirect.com/science/article/pii/S0968090X23001286?dgcid=author), Transportation Research Part C, 151, 104139. 
6.	Xie, J., Liu, Y., and N. Chen (2023) [Two-Sided Deep Reinforcement Learning for Dynamic Mobility-on-Demand Management with Mixed-Autonomy](https://pubsonline.informs.org/doi/full/10.1287/trsc.2022.1188), Transportation Science, 0(0).
7. Chen, Y. and Liu, Y.* (2022) [Integrated Optimization of Planning and Operations for Shared Autonomous Electric Vehicle Systems](https://pubsonline.informs.org/doi/abs/10.1287/trsc.2022.1156), Transportation Science 0(0).
8.	Liu Y., Xie J., N. Chen (2022) [Stochastic One-way Carsharing Systems with Dynamic Relocation Incentives through Preference Learning](https://www.sciencedirect.com/science/article/pii/S1366554522002617?dgcid=author), Transportation Research Part E: Logistics and Transportation Review, 166, 102884. 
9.	Xie, J., Yang, Z., Lai, X., Liu Y.*, Yang, X., Teng T., and Tham CK (2022) [Deep Reinforcement Learning for Dynamic Incident-Responsive Traffic Information Dissemination](https://www.sciencedirect.com/science/article/abs/pii/S1366554522002514), Transportation Research Part E: Logistics and Transportation Review, 166, 102871. 
10.	Chen, N., Liu Y.*, and Yang, M. (2022) Senior mobility patterns and activity change amid COVID-19 pandemic in the urban transit system, under review at Transportation Research Part C: Emerging Technologies.  
11.	Xie, T. and Liu Y.* (2022) [Heterogeneous Information Provision on Traffic Networks with Competitive or Cooperative Information Providers](https://authors.elsevier.com/a/1fMny,M0mRNXCY),  Transportation Research Part C: Emerging Technologies, 142, 103762.
12.	Gu, R., Poon, M., Luo, Z., Liu Y, and Liu Z. (2022) [A hierarchical solution evaluation method and a hybrid algorithm for the vehicle routing problem with drones and multiple visits](https://www.sciencedirect.com/science/article/abs/pii/S0968090X22001681), Transportation Research Part C: Emerging Technologies, 141, 103733.
13.	Xie, T. and Liu Y.* (2022) [Impact of connected and autonomous vehicle technology on market penetration and route choices](https://www.sciencedirect.com/science/article/abs/pii/S0968090X22000894), Transportation Research Part C: Emerging Technologies, 139, 103646.
14.	Zhao, H., Gunardi, W., Liu Y.*, Kiew, C., Teng T., and Yang, X. (2022) [Prediction of Traffic Incident Duration Using Clustering Based Ensemble Learning Method](https://ascelibrary.org/doi/abs/10.1061/JTEPBS.0000688), ASCE Journal of Transportation Engineering, Part A: Systems, 148(7): 04022044.
15.	He, D., Liu Y.*, Zhong, Q., and Wang, Z. (2022) [On the morning commute problem in a Y-shaped network with individual and household travelers](https://pubsonline.informs.org/doi/abs/10.1287/trsc.2021.1117),  Transportation Science 56(4):848-876.
16.	Guo, H.,  Chen, Y.*, and  Liu Y. (2022) [Shared autonomous vehicle management considering competition with human-driven private vehicles](https://www.sciencedirect.com/science/article/abs/pii/S0968090X21005295), Transportation Research Part C: Emerging Technologies 136, 103547.
17.	Tian, Q., Lin, Y., Wang, D.*, and Liu Y. (2022) [Planning for modular-vehicle transit service system: model formulation and solution methods](https://www.sciencedirect.com/science/article/abs/pii/S0968090X22000729), Transportation Research Part C: Emerging Technologies, 138, 103627.
18.	Liu Y.* and Yang Z. (2021)[ Information Provision and Congestion  Pricing in Risky Road Networks with Heterogeneous Travelers](https://www.sciencedirect.com/science/article/abs/pii/S0968090X21001054), Transportation Research Part C: Emerging Technologies, 128, 103083.
19.	Yanfeng Li, Yang Liu* (2021) [The static bike rebalancing problem with optimal user incentives](https://www.sciencedirect.com/science/article/abs/pii/S1366554520308589), Transportation Research Part E: Logistics and Transportation Review, 146, 10221.
20.	Li, Y. and Liu Y.* (2021) [Optimizing en-route matching in a ride-hailing system with boundedly rational users](https://www.sciencedirect.com/science/article/abs/pii/S1366554521001022), Transportation Research Part E: Logistics and Transportation Review, 150, 102329.
21.	Minghua Zeng,  Min Wang, Yang Liu, and  Jiuh-Biing Sheu (2020) [Modeling evacuation route choices under influence of variable message signs](https://onlinelibrary.wiley.com/doi/abs/10.1111/mice.12525), Computer-Aided Civil and Infrastructure Engineering, in press.
22.	Li, Y., Liu Y.*, and Xie, J. (2020) [A path-based equilibrium model for ridesharing matching](https://www.sciencedirect.com/science/article/abs/pii/S0191261520303234), Transportation Research Part B: Methodological, 138, 373-405.
23.	Zhang, D., Liu Y.*, and He, S. (2019) [Vehicle Assignment and Relays for One-Way Electric Car-Sharing Systems](https://www.sciencedirect.com/science/article/abs/pii/S0191261517311116), Transportation Research Part B: Methodological 120, 125-146.
24.	Noruzoliaee, M., Zou, B., and Liu Y. (2018) [Roads in Transition: Integrated Modeling of a Manufacturer-Traveler-Road Infrastructure System in a Mixed Autonomous/Human Driving Environment](https://www.sciencedirect.com/science/article/abs/pii/S0968090X18303590), Transportation Research Part C: Emerging Technologies 90, 307-333.
25.	Liu Y.*, Li Y., and Hu L. (2018) [Departure Time and Route Choices in Bottleneck Equilibrium under Risk and Ambiguity](https://www.sciencedirect.com/science/article/abs/pii/S0191261517307385), Transportation Research Part B: Methodological 117, 774-793.
26.	Liu, P. and Liu, Y.* (2018) [Optimal Information Provision at Bottleneck Equilibrium with Risk-Averse Travelers](https://journals.sagepub.com/doi/abs/10.1177/0361198118792336), Transportation Research Record, Vol 2672, Issue 48, Transportation Research Record, 69-78.
27.	Yu, G., Haskell, W., and Liu Y. (2017) [Resilient facility location against the risk of disruptions](https://www.sciencedirect.com/science/article/abs/pii/S0191261516303460), Transportation Research Part B: Methodological 104, 82-105.
28.	Liu, Y. *and Nie, Y. (2017) [A credit-based congestion management scheme in general two-mode networks with multiclass users](https://link.springer.com/article/10.1007/s11067-017-9340-7), Networks and Spatial Economics 17, 681–711.
29.	Liu Y.* and Li Y. (2017)[ Pricing Scheme Design of Ridesharing Program in Morning Commute Problem](https://www.sciencedirect.com/science/article/abs/pii/S0968090X17300608), Transportation Research Part C: Emerging Technologies 79, 156-177.
30.	Hu, L., and Liu Y.* (2016) [Joint design of parking capacities and fleet size for one-way station-based carsharing systems with road congestion constraints](https://www.sciencedirect.com/science/article/abs/pii/S0191261516301072), Transportation Research Part B: Methodological 93, 263-299.
31.	Liu, Y., Nie, Y., and Hall J. (2015) [A semi-analytical approach for solving bottleneck model with general user heterogeneity](https://www.sciencedirect.com/science/article/abs/pii/S019126151400174X), Transportation Research Part B: Methodological 71, 56-70.
32.	Chen H., Liu Y., and Nie Y. (2015) [Solving the step-tolled bottleneck model with general user heterogeneity](https://www.sciencedirect.com/science/article/abs/pii/S019126151500199X), Transportation Research Part B: Methodological 81, 210–229.
33.	Liu, Y. and Nie, Y. (2012) [Welfare effects of congestion pricing and transit service in multi-class multi-modal networks](https://journals.sagepub.com/doi/abs/10.3141/2283-04), Transportation Research Record 2283, 34-43.
34.	Liu, Y. and Nie, Y. (2011) [Morning commute problem considering route choice, user heterogeneity and alternative system optimal](https://www.sciencedirect.com/science/article/abs/pii/S0191261510001360), Transportation Research Part B: Methodological 45(4), 619-642.
35.	Nie, Y. and Liu, Y. (2010) [Existence of self-financing and Pareto-improving congestion pricing: impact of value of time distribution](https://www.sciencedirect.com/science/article/abs/pii/S0965856409001001), Transportation Research Part A: Policy and Practice 44(1), 39-51.
36.	Liu, Y., Guo, X. and Yang, H. (2009) [Pareto-improving and revenue-neutral congestion pricing schemes in two-mode traffic networks](https://link.springer.com/article/10.1007/s11066-008-9018-x), NETNOMICS: Economic Research and Electronic Networking 10 (1), 123-140.

## Working Paper

1. Optimal Routing Policy for a Mixture of Connected Vehicles and Human-Driven Vehicles With En-route Information, with Yang, Z.
2. Optimal Design of CAV Platoonable Corridor in Transportation Road Networks, with Zhu, D., Xie, T., and Zou, B.
3. Private and Public Traffic Information Design with Rational Inattentive Travelers, with Yang, Z.
4. Managing mixed traffic with electric and gasoline vehicles using tradable credit scheme, with Zeng, H. and Xie, T.
5. An Optimization Model for Staggered Bottleneck Congestion with Heterogeneous Commuters.
6. Dynamic Pricing in One-way Car Sharing Networks: A Distributional Fluid Approximation Approach, with Yunan Liu, Shuangchi He, Ling Zhang.
7. Dynamic User Equilibria on Two-Modes Corridors with Risk-Averse Users, with Liu, P.


## Conference Proceedings
1. Li, Y. and Liu, Y.* (2021) Optimizing en-route matching in a ride-hailing system with boundedly rational users, Transportation Research Procedia of The 24th International Symposium on Transportation and Traffic Theory (ISTTT is the prestigious gathering for the world's transportation and traffic theorists, acceptance rate: 16%).
2. Liu Y., Xie J., N. Chen (2021) Offline-Online Approximate Dynamic Programming for Stochastic Carsharing Systems with Relocation Incentives, Proceedings of the 100th Annual Meeting of Transportation Research Board.
3. Li, T. and Liu, Y.* (2020) Mode Choices and Optimal Car Ownership of Stochastic User Equilibrium with Ridesharing, Proceedings of the 98th Annual Meeting of Transportation Research Board.
4. He, D., Liu, Y.* , Zhong, Q., and Wang, Z. (2019) On the morning commute problem in a Y-shaped network with individual and household travelers, Proceedings of the 97th Annual Meeting of Transportation Research Board.
5. He, D., Liu, Y.* , Zhong, Q., and Wang, Z. (2018) On the morning commute problem in a Y-shaped network with individual and household travelers, Proceedings of the 7th International Symposium on Dynamic Traffic Assignment.
6. Liu, P. and Liu, Y.* (2018) Optimal Information Provision at Bottleneck Equilibrium with Risk-Averse Travelers, Proceedings of the 96th Annual Meeting of Transportation Research Board.
7. Liu, P., Liu, Y.* and Ong Ghim Ping (2018) Dynamic User Equilibrium Departure Time and Mode Choice on Bi-modal Corridor with Risk-Averse Travelers, Proceedings of the 6th International Symposium on Reliability Engineering and Risk Management.
8. Liu, Y.* Li, Y. and Hu, L. (2017) Departure time and route choices with bottleneck congestion: user equilibrium under risk and ambiguity, Transportation Research Procedia of The 22nd International Symposium on Transportation and Traffic Theory (ISTTT is the prestigious gathering for the world's transportation and traffic theorists, acceptance rate: 10%).
9. Liu, Y.* and Li, Y. (2017) Dynamic User Equilibrium of Bottleneck Model with Ridesharing Program, Proceedings of the 96th Annual Meeting of Transportation Research Board.
10. Hu, Lu. and Liu, Y.* (2017) One-Way Carsharing Systems Design in Mixed Queuing Networks with Road Congestion, Proceedings of the 96th Annual Meeting of Transportation Research Board.
11. Chen, H., Liu, Y., and Nie, Y. (2015) Solving the step-tolled bottleneck model with general user heterogeneity, Proceedings of the 94th Annual Meeting of Transportation Research Board.
12. Liu, Y., Nie, Y., and Hall J. (2014) A semi-analytical approach for solving bottleneck model with general heterogeneity, Proceedings of the 93rd Annual Meeting of Transportation Research Board.
13. Liu, Y. and Nie, Y. (2012) Welfare effects of congestion pricing and transit service in multi-class multi-modal networks, Proceedings of the 91st Annual Meeting of Transportation Research Board.
14. Nie, Y. and Liu, Y. (2010) Existence of self-financing and Pareto-improving congestion pricing: impact of value of time distribution, Proceedings of the 89th Annual Meeting of Transportation Research Board.
15. Bar-Gera, H., Nie, Y., Boyce, D., Hu, Y. and Liu, Y.(2010) Consistent route flows and the condition of proportionality, Proceedings of the 89th Annual Meeting of Transportation Research Board.
16. Liu, Y., Guo, X. and Yang, H. (2008) Pareto-improving and revenue-neutral congestion pricing schemes in two-mode traffic networks, Proceedings of the 87th Annual Meeting of Transportation Research Board.
17. Guo, X., Liu, Y. and Yang H. (2006) Time versus cost system optimization in networks with heterogeneous users, Proceedings of the 11th International Conference of Hong Kong Society for Transportation Studies.



<br>
<br>
