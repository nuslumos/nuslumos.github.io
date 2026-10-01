---
title: "LUMOS - Team"
layout: gridlay
team_layout: true
excerpt: "LUMOS: Team members"
sitemap: false
permalink: /team/
---

<link rel="stylesheet" href="{{ site.url }}{{ site.baseurl }}/css/team.css">

<div class="team-page" markdown="1">

### Principal Investigator
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if member.group == 0 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-12 clearfix team-member team-pi">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <div class="team-member-copy">
  <h4><a href="{{ member.url }}" class="off">{{ member.name }} (刘杨)</a></h4>
  <span style="font-weight:bold !important;">{{ member.info }}</span>
  <br>
  Dr. Liu Yang is jointly appointed as an Associate Professor in the Department of Civil and Environmental Engineering and the Department of Industrial Systems Engineering and Management at the National University of Singapore. Dr. Liu teaches and researches transport planning and modelling, urban mobility and logistics, traffic congestion management and data-driven methods. She received her B.S. from Tsinghua University, MPhil from Hong Kong University of Science and Technology, and Ph.D. from Northwestern University. Previously, Dr. Liu worked as a consultant at Cambridge Systematics and provided modeling expertise to public agencies such as the Chicago Department of Transportation. She has worked on research projects supported by the Singapore Ministry of Education, National Research Foundation, Land Transport Authority, Urban Redevelopment Authority, A*STAR, Cisco Systems and ST Engineering. Her work is well recognised internationally by research awards such as the Transportation Science Journal Best Paper Award. She serves on the editorial boards of Transportation Science (Associate Editor), Transportation Research Part B (Associate Editor), Transportation Research Part C, Socio-Economic Planning Sciences (Associate Editor), and Communications in Transportation Research. She is the chair of the WTC Multimodal Urban Transportation System Analysis Committee and co-chair of the Transportation Network Modelling and Computation Committee.
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

---

### Research Fellow
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if member.group == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix team-member">
  {% if member.photo %}
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive team-photo" />
  {% endif %}
  <div class="team-member-copy">
  <h4><a href="{{ member.url }}" class="off">{% unless member.show_dr == false %}Dr. {% endunless %}{{ member.name }}</a></h4>
  <span>{{ member.info }}</span>
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

---

### Current Student
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if member.group == 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix team-member">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive team-photo" />
  <div class="team-member-copy">
  <h4><a href="{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <span>{{ member.info }}</span> <br>
  <span>Year: {{ member.year }}</span> <br>
  <span>Thesis: {{ member.thesis }}</span> <br>
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

---

### Visiting Scholar/Student
{% for member in site.data.team_members %}
{% if member.group == 3 %}
<div class="team-list-member" markdown="1">

{% if member.url %}
<span class="alumni1" style="font-weight:bold;"><a href="{{ member.url }}">{{ member.name }}</a></span><br>
{% else %}
<span class="alumni1" style="font-weight:bold;">{{ member.name }}</span><br>
{% endif %}
<span class="alumni2">{{ member.school }}</span><br>
{% if member.email %}<span class="alumni2">email: {{ member.email }}</span>{% endif %}

</div>

{% endif %}
{% endfor %}



---

### Alumni-Postdoctoral Research Fellows

{% for member in site.data.team_members %}
{% if member.group == 5 %}
<div class="team-list-member" markdown="1">

<p style="margin-bottom: 5px;">
{% if member.url %}
  <span class="alumni1" style="font-weight:bold;"><a href="{{ member.url }}">Dr. {{ member.name }}</a></span><br>
{% else %}
  <span class="alumni1" style="font-weight:bold">Dr. {{ member.name }}</span><br>
{% endif %}
</p>
<span class="alumni2"><b>Job Placement</b>: {{ member.job }}</span> 

</div>

{% endif %}
{% endfor %}

---

### Alumni-Ph.D Student

{% for member in site.data.team_members %}
{% if member.group == 4 %}
<div class="team-list-member" markdown="1">

<p style="margin-bottom: 5px;">
{% if member.url %}
<span class="alumni1" style="font-weight:bold;">
  <a href="{{ member.url }}">Dr. {{ member.name }}</a>
  <span style="color: gray;">{{ member.year }}</span>
</span>
{% else %}
<span class="alumni1" style="font-weight:bold;">
  Dr. {{ member.name }}
  <span style="color: gray;">{{ member.year }}</span>
</span>
{% endif %}
</p>
<span class="alumni2">{{ member.school }}</span><br>
<span class="alumni2"><b>Thesis</b>: {{ member.thesis }}</span><br>
<span class="alumni2"><b>Job Placement</b>: {{ member.job }} </span>

</div>

{% endif %}
{% endfor %}



---

<br>
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/team_pic_5.jpg" class="img-responsive team-group-photo" width="75%">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/team_pic_4.jpg" class="img-responsive team-group-photo" width="75%">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/team_pic_3.jpg" class="img-responsive team-group-photo" width="75%">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/team_pic_1.jpg" class="img-responsive team-group-photo" width="75%">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/team_pic_2.jpg" class="img-responsive team-group-photo" width="75%">

</div>
