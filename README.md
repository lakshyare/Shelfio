
# Shelfio

Shelfio transforms book discovery into a visual experience. Browse curated shelves, explore complete book designs including front, back, and spine covers, and discover titles through a clean interface built for modern readers.


## Features

# Features

* Minimal and modern UI
* Responsive across all devices
* Interactive digital bookshelf
* Dynamic book data with Supabase
* Front, back, and spine book covers
* External purchase links
* Fast and lightweight performance
* Cloud image storage with Supabase
* Clean card-based layout
* Easy-to-scale backend structure
* Seamless Vercel deployment
* Future-ready architecture for:

  * user accounts
  * favorites
  * reviews and ratings
  * reading lists
  * AI recommendations
  * advanced search and filters

## Deployment

* Shelfio is deployed using Vercel for fast global hosting and seamless frontend deployment.

### Tech Stack
* HTML
* CSS
* JavaScript
* Supabase
* Vercel
## FAQ

#### What is Shelfio?

Shelfio is a visual-first digital bookshelf platform designed to make book discovery more immersive and aesthetically pleasing.

#### Can I add more books later?

Yes. Books can be added anytime directly through Supabase or through a future admin dashboard.

#### Does Shelfio support mobile devices?

Yes. The platform is fully responsive across desktop, tablet, and mobile devices.

#### Where are the images stored?

Images are stored securely using Supabase Storage buckets.

#### Is Shelfio open source?

Yes. The project can be modified, expanded, and customized freely.

#### Where are the images stored?

Images are stored securely using Supabase Storage buckets.

#### Is Shelfio open source?

Yes. The project can be modified, expanded, and customized freely.

## Documentation

### Database Structure
#### Books Table
| Column Name |	Type |
| :-------- | :------: |
id | uuid
title | text
author | text
buy_link | text
front_cover_url	| text
back_cover_url | text
spine_cover_url	| text
description	| text
genre | text
rating | numeric

### Storage

* Shelfio uses Supabase Storage for storing:
    * Front book covers
    * Back book covers
    * Spine images


* Folder structure:

    * book-images/
    * atomic-habits/
        * front.jpg
        * back.jpg
        * spine.jpg
## Authors

- [@lakshyare](https://www.github.com/lakshyare)

