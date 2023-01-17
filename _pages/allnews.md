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
{% if article.image %} <img src="{{ site.url }}{{ site.baseurl }}{{ article.image }}" class="img-responsive" width="75%">  {% endif %}
{% endfor %}

<br>
<br>
