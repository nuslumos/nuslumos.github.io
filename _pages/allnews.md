---
title: "LUMOS - News"
layout: textlay
excerpt: "LUMOS at NUS."
sitemap: false
permalink: /allnews/
---

### Lab News


{% for news in site.data.news%}
<div markdown="0" style="padding-top:5px; ">
    <div style="display: flex; align-items: flex-start; margin-bottom: 20px;">
        <img src="{{ site.url }}{{ site.baseurl }}/{{ news.image | default: 'images/nus_logo_full-horizontal.jpg' }}" alt="News image" style="width: 175px; height: 125px; margin-right: 15px; object-fit: cover; border: 0.2px solid grey; margin-top: 10px;">
        <div>
            <h4><a href="#">{{ news.headline }}</a></h4>
            <p style="font-size:14px">{{ news.type }} | <em>{{ news.date }}</em></p>
            <p>{{ news.abstract }}</p>
        </div>
    </div>
</div>
{% endfor %}


<br>
<br>
