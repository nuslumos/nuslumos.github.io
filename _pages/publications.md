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



## Working Papers

<ul>
    <li>Private and Public Traffic Information Design with Rational Inattentive Travelers, with Yang, Z.</li>
    <li>Exploring Senior Mobility Patterns and Activity Change amid COVID-19 Pandemic in the Urban Rail Transit System, with Chen, E.</li>
    <li>Managing mixed traffic with electric and gasoline vehicles using tradable credit scheme, with Zeng, H. and Xie, T.</li>
    <li>An Optimization Model for Staggered Bottleneck Congestion with Heterogeneous Commuters.</li>
    <li>Dynamic Pricing in One-way Car Sharing Networks: A Distributional Fluid Approximation Approach, with Yunan Liu, Shuangchi He, Ling Zhang.</li>
    <li>Dynamic User Equilibria on Two-Modes Corridors with Risk-Averse Users, with Liu, P.</li>
</ul>


## Conference Proceedings

<ul>
  <li>Li, Y. and Liu, Y.* (2021) Optimizing en-route matching in a ride-hailing system with boundedly rational users, Transportation Research Procedia of The 24th International Symposium on Transportation and Traffic Theory (ISTTT is the prestigious gathering for the world’s transportation and traffic theorists, acceptance rate: 16%).</li>
  <li>Liu Y., Xie J., N. Chen (2021) Offline-Online Approximate Dynamic Programming for Stochastic Carsharing Systems with Relocation Incentives, Proceedings of the 100th Annual Meeting of Transportation Research Board.</li>
  <li>Li, T. and Liu, Y.* (2020) Mode Choices and Optimal Car Ownership of Stochastic User Equilibrium with Ridesharing, Proceedings of the 98th Annual Meeting of Transportation Research Board.</li>
  <li>He, D., Liu, Y.* , Zhong, Q., and Wang, Z. (2019) On the morning commute problem in a Y-shaped network with individual and household travelers, Proceedings of the 97th Annual Meeting of Transportation Research Board.</li>
  <li>He, D., Liu, Y.* , Zhong, Q., and Wang, Z. (2018) On the morning commute problem in a Y-shaped network with individual and household travelers, Proceedings of the 7th International Symposium on Dynamic Traffic Assignment.</li>
  <li>Liu, P. and Liu, Y.* (2018) Optimal Information Provision at Bottleneck Equilibrium with Risk-Averse Travelers, Proceedings of the 96th Annual Meeting of Transportation Research Board.</li>
  <li>Liu, P., Liu, Y.* and Ong Ghim Ping (2018) Dynamic User Equilibrium Departure Time and Mode Choice on Bi-modal Corridor with Risk-Averse Travelers, Proceedings of the 6th International Symposium on Reliability Engineering and Risk Management.</li>
  <li>Liu, Y.* Li, Y. and Hu, L. (2017) Departure time and route choices with bottleneck congestion: user equilibrium under risk and ambiguity, Transportation Research Procedia of The 22nd International Symposium on Transportation and Traffic Theory (ISTTT is the prestigious gathering for the world’s transportation and traffic theorists, acceptance rate: 10%).</li>
  <li>Liu, Y.* and Li, Y. (2017) Dynamic User Equilibrium of Bottleneck Model with Ridesharing Program, Proceedings of the 96th Annual Meeting of Transportation Research Board.</li>
  <li>Hu, Lu. and Liu, Y.* (2017) One-Way Carsharing Systems Design in Mixed Queuing Networks with Road Congestion, Proceedings of the 96th Annual Meeting of Transportation Research Board.</li>
  <li>Chen, H., Liu, Y., and Nie, Y. (2015) Solving the step-tolled bottleneck model with general user heterogeneity, Proceedings of the 94th Annual Meeting of Transportation Research Board.</li>
  <li>Liu, Y., Nie, Y., and Hall J. (2014) A semi-analytical approach for solving bottleneck model with general heterogeneity, Proceedings of the 93rd Annual Meeting of Transportation Research Board.</li>
  <li>Liu, Y. and Nie, Y. (2012) Welfare effects of congestion pricing and transit service in multi-class multi-modal networks, Proceedings of the 91st Annual Meeting of Transportation Research Board.</li>
  <li>Nie, Y. and Liu, Y. (2010) Existence of self-financing and Pareto-improving congestion pricing: impact of value of time distribution, Proceedings of the 89th Annual Meeting of Transportation Research Board.</li>
  <li>Bar-Gera, H., Nie, Y., Boyce, D., Hu, Y. and Liu, Y.(2010) Consistent route flows and the condition of proportionality, Proceedings of the 89th Annual Meeting of Transportation Research Board.</li>
  <li>Liu, Y., Guo, X. and Yang, H. (2008) Pareto-improving and revenue-neutral congestion pricing schemes in two-mode traffic networks, Proceedings of the 87th Annual Meeting of Transportation Research Board.</li>
  <li>Guo, X., Liu, Y. and Yang H. (2006) Time versus cost system optimization in networks with heterogeneous users, Proceedings of the 11th International Conference of Hong Kong Society for Transportation Studies.</li>
</ul>

</div>
