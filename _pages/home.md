---
title: "LUMOS Home"
layout: homelay
excerpt: "Lab for Urban Mobility Systems at NUS."
sitemap: false
permalink: /
---

## Welcome to Lab for Urban Mobility Systems (LUMOS) at NUS
<div markdown="0" class="home-intro">
<div class="well home-pi">
  <div class="media">
    <div class="media-left">
      <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/liuyang.jpg" class="media-object" style="width:120px; margin: 0px;">
    </div>
    <div class="media-body" style="padding-left:10px">
      <h4 class="media-heading"><a href="/team/liu_yang" class="off">Dr. Liu Yang (刘杨)</a></h4>
      <p>Associate Professor</p>
      <p>Department of Civil and Environmental Engineering</p>
      <p>Department of Industrial Systems Engineering and Management</p>
      <p style="margin:0">National University of Singapore</p>
    </div>
  </div>
</div>
    <p>The Lab for Urban Mobility Systems (LUMOS) at the National University of Singapore develops data-driven models and AI-enabled decision-making methods for transportation and logistics systems. We integrate reinforcement learning, mathematical optimisation, and transport system and behaviour modelling to address challenges in planning, operations, and management. Our goal is to advance efficient, equitable, and reliable mobility through research that connects methodological innovation with practical needs.</p>
    <a href="https://ieeexplore.ieee.org/document/9733251">Our lab's research activities has been profiled at IEEE Intelligent Transportation Systems Magazine.</a>
</div>

---

### Our Research 
Our research connects infrastructure planning, real-time operations, and traveller behaviour across urban mobility, public transport, logistics, and air transport, with a focus on emerging technologies such as autonomous vehicles (AVs) and electric vehicles (EVs).

The research team develops multidisciplinary approaches to address research questions with theoretical contributions and real-world implications for efficient and sustainable transportation system planning and management.

{% include research_figures.html id="home" images="homogeneity_based_mean_field_drl_framework.png|equitable_hybrid_intersection_design.png|learning_informed_optimization_saevs.png|senior_centric_type_matching_framework.jpg|traveller_preferences_and_information.png|congestion.png|smart_card_travel_pattern_analysis.png|delivery_pickup_dispatch_workflow.png|llm_travel_behavior_modeling.png|traffic_incident_severity_assessment.jpeg|rl_traffic_information_dissemination_simulation.jpeg" descriptions="Adaptive routing with mean-field deep reinforcement learning|Equitable hybrid intersection design|Learning-informed optimisation for shared autonomous electric vehicles|Dynamic senior-centric type matching for mobility-on-demand management|Heterogeneous traveller preferences and travel information|Congestion management and information provision in connected networks|Smart card travel pattern analysis for public transport|Truck-drone delivery and pickup dispatch workflow|Large language models for travel behaviour modelling|Simulation and deep learning for traffic incident severity assessment|Reinforcement learning for traffic information dissemination in simulation" %}

<b>LUMOS aims to disseminate new insights, knowledge, and tools to academia, industry, government, and research organizations worldwide.</b>

<p class="home-more"><a href="/research/" class="home-more-link">Explore our research <span aria-hidden="true">→</span></a></p>

---

### Lab News

<div markdown="0" class="home-news">
{% for news in site.data.news limit:5 %}
<div class="home-news-entry">
  <img src="{{ news.image | default: 'images/nus_logo_full-horizontal.jpg' }}" alt="News image" class="home-news-image">
  <div>
    <h4><a href="#">{{ news.headline }}</a></h4>
    <p style="font-size:14px">{{ news.type }} | <em>{{ news.date }}</em></p>
    <p>{{ news.abstract }}</p>
  </div>
</div>
{% endfor %}
</div>

<p class="home-more"><a href="/allnews/" class="home-more-link">View all news <span aria-hidden="true">→</span></a></p>

---

### Joining LUMOS
We are recruiting phd students and postdoctoral fellows. We are looking for researchers with strong interests and expertise in *traffic simulation, mathematical modelling and programming, and data-driven optimization approaches*. If you are interested in joining LUMOS, please contact Dr. Liu Yang directly by emailing to [iseliuy@nus.edu.sg](mailto:iseliuy@nus.edu.sg) or [ceelya@nus.edu.sg](mailto:ceelya@nus.edu.sg).

<br>
