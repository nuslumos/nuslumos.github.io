---
title: "LUMOS - News"
layout: textlay
excerpt: "LUMOS at NUS."
sitemap: false
permalink: /allnews/
---

### News Gallary 
<div markdown="0">
    <div class="gallery">
        <div class="thumbnails">
            {% assign images = site.data.images %}
            {% for image in images %}
            <a href="{{ site.url }}{{ site.baseurl }}/{{ image }}" data-fancybox="gallery" data-caption="Image {{ forloop.index }}">
                <img src="{{ site.url }}{{ site.baseurl }}/{{ image }}" style="padding-left:0px!important" alt="Image {{ forloop.index }}">
            </a>
            {% endfor %}
        </div>
    </div>

    <div id="all-thumbnails-modal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeAllThumbnails()">&times;</span>
            <div class="all-thumbnails">
                {% for image in images %}
                <a href="{{ site.url }}{{ site.baseurl }}/{{ image }}" data-fancybox="gallery" data-caption="Image {{ forloop.index }}">
                    <img src="{{ site.url }}{{ site.baseurl }}/{{ image }}" alt="Image {{ forloop.index }}">
                </a>
                {% endfor %}
            </div>
        </div>
    </div>
</div>

<script>
function showAllThumbnails() {
    document.getElementById('all-thumbnails-modal').style.display = "block";
}

function closeAllThumbnails() {
    document.getElementById('all-thumbnails-modal').style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('all-thumbnails-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}</script>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>


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
