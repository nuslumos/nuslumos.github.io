---
title: "LUMOS - News"
layout: textlay
excerpt: "LUMOS at NUS."
sitemap: false
permalink: /allnews/
---

# News

{% for article in site.data.news %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>

{% if article.trb_102 %} 
<div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover" >
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

{% endif %}

{% endfor %}

<br>
<br>
