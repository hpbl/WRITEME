  
@abstr_hyperlink   
Photon   


Incredibly fast crawler designed for OSINT.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

@abstr_hyperlink • @abstr_hyperlink • @abstr_hyperlink • @abstr_hyperlink • Contribution • @abstr_hyperlink 

### Key Features

#### Data Extraction

Photon can extract the following data while crawling:

  * URLs (in-scope & out-of-scope)
  * URLs with parameters (`example.com/gallery.php?id= @abstr_number`)
  * Intel (emails, social media accounts, amazon buckets etc.)
  * Files (pdf, png, xml etc.)
  * Secret keys (auth/API keys & hashes)
  * JavaScript files & Endpoints present in them
  * Strings matching custom regex pattern
  * Subdomains & DNS related data



The extracted information is saved in an organized manner or can be @abstr_hyperlink .

@abstr_image 

#### Flexible

Control timeout, delay, add seeds, exclude URLs matching a regex pattern and other cool stuff. The extensive range of @abstr_hyperlink provided by Photon lets you crawl the web exactly the way you want.

#### Genius

Photon's smart thread management & refined logic gives you top notch performance.

Still, crawling can be resource intensive but Photon has some tricks up it's sleeves. You can fetch URLs archived by @abstr_hyperlink to be used as seeds by using `--wayback` option.

#### Plugins

  * **@abstr_hyperlink**
  * **@abstr_hyperlink**
  * **@abstr_hyperlink**



#### Docker

Photon can be launched using a lightweight Python-Alpine ( @abstr_number MB) Docker image.

@abstr_code_section 

To view results, you can either head over to the local docker volume, which you can find by running `docker inspect photon` or by mounting the target loot folder:

@abstr_code_section 

#### Frequent & Seamless Updates

Photon is under heavy development and updates for fixing bugs. optimizing performance & new features are being rolled regularly.

If you would like to see features and issues that are being worked on, you can do that on @abstr_hyperlink project board.

Updates can be installed & checked for with the `--update` option. Photon has seamless update capabilities which means you can update Photon without losing any of your saved data.

### Contribution & License

You can contribute in following ways:

  * Report bugs
  * Develop plugins
  * Add more "APIs" for ninja mode
  * Give suggestions to make it better
  * Fix issues & submit a pull request



Please read the @abstr_hyperlink before submitting a pull request or issue.

Do you want to have a conversation in private? Hit me up on my @abstr_hyperlink , inbox is open :)

**Photon** is licensed under @abstr_hyperlink 
