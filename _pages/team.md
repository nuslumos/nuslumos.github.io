---
title: "LUMOS - Team"
layout: gridlay
excerpt: "LUMOS: Team members"
sitemap: false
permalink: /team/
---

# Team Members
(Please click the name below for the lab memeber's profile)


---

## Principal Investigator
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if member.group == 0 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-12 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a href="{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <i>{{ member.info }}</i>
  <i>Dr. Liu Yang is jointly appointed as an Assistant professor in the Department of Civil and Environmental Engineering and the Department of Industrial Systems Engineering and Management at National University of Singapore. She received her B.S. from Tsinghua University,  MPhil from Hong Kong University of Science and Technology and  Ph.D. from Northwestern University. Previously, Dr. Liu worked as a consultant at Cambridge Systematics and provided modeling expertise to public agencies such as Chicago Department of Transportation. She has worked on research projects funded by US and Singapore public agencies, including US Federal Highway Administration, the National Science Foundation, Singapore Ministry of Education, and ST Engineering.  Dr. Liu’s research focuses on future mobility and transport, which covers topics in the areas of ridesharing and carsharing systems operations and design, travel demand and congestion management, and data-driven transportation system modeling and analysis. Her work has been published in the major journals in the transportation area, including Transportation Research Part A: Policy, Transportation Research Part B: Methodological, and Transportation Research Part C: Emerging Technologies. Currently, she serves on the editorial boards of Transportation Science (Associate Editor), Transportation Research Part C, and Socio-Economic Planning Sciences (Associate Editor). She is a co-chair of WTC Shared Logistics and Transportation Systems Committee, a member of Transportation Research Board Standing Committee on Emerging and Innovative Public Transport and Technologies (AP020) and Transportation Network Modeling (AEP40), a member of the Chinese Overseas Transportation Association (COTA) Board of Directors, and a member of WCTRS Special Interest Group Transport Theory and Modelling.</i>
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

---

## Research Fellow
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if member.group == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a href="{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <i>{{ member.info }}</i>
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

---

## Current Student
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if member.group == 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a href="{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <i>{{ member.info }}</i> <br>
  <i>Year: {{ member.year }}</i> <br>
  <i>Thesis: {{ member.thesis }}</i> <br>
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

---

## Visiting Student
{% for member in site.data.team_members %}
{% if member.group == 3 %}

<i class="alumni1">{{ member.name }}</i><br>
<i class="alumni2">{{ member.school }}</i><br>
<i class="alumni2">email: {{ member.email }}</i> {% if member.extlink %} <a class="alumni2" style="padding-left: 0px;" href="{{ member.extlink }}">(Link)</a> {% endif %}

{% endif %}
{% endfor %}

---

## Alumni

### Ph.D Student

{% for member in site.data.team_members %}
{% if member.group == 4 %}

<i class="alumni1" style="font-weight:bold">{{ member.name }}, {{ member.year }}</i><br>
<i class="alumni2">{{ member.school }}</i><br>
<i class="alumni2"><b>Thesis</b>: {{ member.thesis }}</i><br>
<i class="alumni2"><b>Job Placement</b>: {{ member.job }} </i> {% if member.url %} <a class="alumni2" style="padding-left: 0px;" href="{{ member.url }}">(Link)</a> {% endif %}

{% endif %}
{% endfor %}



---

### Postdoctoral Research Fellows

{% for member in site.data.team_members %}
{% if member.group == 5 %}

<i class="alumni1" style="font-weight:bold">{{ member.name }}</i><br>
<i class="alumni2"><b>Job Placement</b>: {{ member.job }}</i> {% if member.url %} <a class="alumni2" style="padding-left: 0px;" href="{{ member.url }}">(Link)</a> {% endif %}

{% endif %}
{% endfor %}



---






