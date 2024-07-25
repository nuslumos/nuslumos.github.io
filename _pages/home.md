---
title: "LUMOS Home"
layout: homelay
excerpt: "Lab for Urban Mobility Systems at NUS."
sitemap: false
permalink: /
---

## Welcome to Lab for Urban Mobility Systems (LUMOS) at NUS
<div markdown="0" style="padding-top:5px; ">
<div class="well" style="background-color: rgba(1, 61, 124, 0.05);">
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
    <p>The mission of the Lab for Urban Mobility Systems (LUMOS) is to advance intelligent transportation systems, formulate new design and operational strategies, devise effective solutions to transportation problems, and bridge academic communities with industry to improve the mobility, reliability, and sustainability of transportation systems.</p>
    <a href="https://ieeexplore.ieee.org/document/9733251">Our lab's research activities has been profiled at IEEE Intelligent Transportation Systems Magazine.</a>
</div>

---

### Our Research 
We focus on future urban mobility and transport systems, which cover the areas of shared mobility system operation and design, travel demand and congestion management, and data-driven transportation system modeling and analysis.

The research team develops multidisciplinary approaches to address research questions with theoretical contributions and real-world implications for efficient and sustainable transportation system planning and management.

<div markdown="0" id="carousel" style="max-width: 700px; margin: 0 auto;" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover" >
    <!-- Menu -->
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
    </ol>

    <!-- Items -->
    <div class="carousel-inner" markdown="0">
        <div class="item active">
            <img src="{{ site.url }}{{ site.baseurl }}/images/home/sharing.png" alt="Mixed-fleet MoD system" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/home/congestion.png" alt="Congestion management and information provision for connected vehicles and RVs" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/home/lane.png" alt="Simulating lane-changing behavior in response to information displayed on an electronic signboard" />
        </div>
    </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<b>LUMOS aims to disseminate new insights, knowledge, and tools to academia, industry, government, and research organizations worldwide.</b>

<p><a href="/allnews" class="btn btn-primary" style="background-color: #013D7C; border-color: #013D7C; font-size:16px">see all research</a></p>

---

### Lab News

<div markdown="0" style="padding-top:5px; ">
{% for news in site.data.news limit:5 %}
<div style="display: flex; align-items: flex-start; margin-bottom: 20px;">
  <img src="{{ news.image | default: 'images/nus_logo_full-horizontal.jpg' }}" alt="News image" style="width: 175px; height: 125px; margin-right: 15px; object-fit: cover; border: 0.2px solid grey; margin-top: 10px;">
  <div>
    <h4><a href="#">{{ news.headline }}</a></h4>
    <p style="font-size:14px">{{ news.type }} | <em>{{ news.date }}</em></p>
    <p>{{ news.abstract }}</p>
  </div>
</div>
{% endfor %}
</div>

<p><a href="/allnews" class="btn btn-primary" style="background-color: #013D7C; border-color: #013D7C; font-size:16px">see all News</a></p>

---

### Joining LUMOS
We are recruiting phd students and postdoctoral fellows. We are looking for researchers with strong interests and expertise in *traffic simulation, mathematical modelling and programming, and data-driven optimization approaches*. If you are interested in joining LUMOS, please contact Dr. Liu Yang directly by emailing to [iseliuy@nus.edu.sg](iseliuy@nus.edu.sg) or [ceelya@nus.edu.sg](ceelya@nus.edu.sg).

<br>