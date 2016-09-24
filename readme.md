# Office Animals startup-album website

- Usinx hexo.io static site generator.


## Running

Start docker container and serve files with nginx:  
```docker run --name hexo -d -it -p 80:80 -v ~/Sites/officeanimals-album/:/usr/share/nginx/html/ simplyintricate/hexo```

Generate files:
```docker run --rm -it -v ~/Sites/officeanimals-album/:/usr/share/nginx/html/ simplyintricate/hexo hexo generate```

Load theme dependencies:
```docker run -it --rm -v $(pwd):/data onefastsnail/node-bower-gulp bower --allow-root install```

Run hexo server on port 4000:
```docker run --rm -it -p 4000:4000 -v ~/Sites/officeanimals-album/:/usr/share/nginx/html/ simplyintricate/hexo hexo server```

Deploy to production:
```docker run --rm -it -v ~/Sites/officeanimals-album/:/usr/share/nginx/html/ simplyintricate/hexo hexo deplou```
