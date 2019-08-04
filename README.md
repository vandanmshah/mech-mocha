# mech-mocha
*Light weight game platform especially for 'Vernacular India'.
# How to run
* To run project just run index.html file.
* Deployed server on heroku along with using github pages
* For login you can login with a@gmail.com, b@gmail.com
* To get number of players hit GET https://serene-wave-90244.herokuapp.com/players
* To here we have status 0:- Not loged in, 1:- LogedIn but not playing 2:- LogedIn and playing
* To can change status hit POST https://serene-wave-90244.herokuapp.com/players with body: { "email": "b@gmail.com", "status": "1" }
