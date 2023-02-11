---
id: apprentus-cheatsheet
title: Apprentus Cheatsheet
---

- #### Restart Apprentus Locally:

`rails s -b 0.0.0.0 -p 3000`

`npm run build:dev:client`

`npm run build:dev:server`

`npm run build:dev:admin`

---

- #### Connect To Stagings:

`ssh deploy@staging.apprentus.dev`

`ssh -p 54551 deploy@staging-v1.apprentus.dev`

`ssh -p 54552 deploy@staging-v2.apprentus.dev`

`ssh -p 54553 deploy@staging-v3.apprentus.dev`

`ssh -p 54554 deploy@staging-v4.apprentus.dev`

`ssh -p 54555 deploy@staging-v5.apprentus.dev`

`ssh -p 54556 deploy@staging-v6.apprentus.dev`

---

- #### Open Mailcatcher On All Stagings:

`https://mailcatcher.staging.apprentus.dev`

`https://mailcatcher.staging-v1.apprentus.dev`

`https://mailcatcher.staging-v2.apprentus.dev`

`https://mailcatcher.staging-v3.apprentus.dev`

`https://mailcatcher.staging-v4.apprentus.dev`

`https://mailcatcher.staging-v5.apprentus.dev`

`https://mailcatcher.staging-v6.apprentus.dev`

---

- #### Deploy On All Stagings:

`bundle exec cap staging deploy`

`bundle exec cap staging_v1 deploy`

`bundle exec cap staging_v2 deploy`

`bundle exec cap staging_v3 deploy`

`bundle exec cap staging_v4 deploy`

`bundle exec cap staging_v5 deploy`

`bundle exec cap staging_v6 deploy`

---

- #### Reboot All Staging Servers :

`ssh deploy@staging.apprentus.dev 'sudo reboot'`

`bundle exec cap staging server:reboot`

`ssh -p 54551 deploy@staging-v1.apprentus.dev 'sudo reboot'`

`bundle exec cap staging_v1 server:reboot`

`ssh -p 54552 deploy@staging-v2.apprentus.dev 'sudo reboot'`

`bundle exec cap staging_v2 server:reboot`

`ssh -p 54553 deploy@staging-v3.apprentus.dev 'sudo reboot'`

`bundle exec cap staging_v3 server:reboot`

`ssh -p 54554 deploy@staging-v4.apprentus.dev 'sudo reboot'`

`bundle exec cap staging_v4 server:reboot`

`ssh -p 54555 deploy@staging-v5.apprentus.dev 'sudo reboot'`

`bundle exec cap staging_v5 server:reboot`

`ssh -p 54556 deploy@staging-v6.apprentus.dev 'sudo reboot'`

`bundle exec cap staging_v6 server:reboot`

---

- #### Launch Rails Console On All Staging:

`bundle exec cap staging rails:console`

`bundle exec cap staging_v1 rails:console`

`bundle exec cap staging_v2 rails:console`

`bundle exec cap staging_v3 rails:console`

`bundle exec cap staging_v4 rails:console`

`bundle exec cap staging_v5 rails:console`

`bundle exec cap staging_v6 rails:console`

---

- #### Launch i18n Update On Localhost:

`./script/i18n/update`

---

- #### Launch i18n Update On All Staging:

`bundle exec cap staging i18n:update`

`bundle exec cap staging_v1 i18n:update`

`bundle exec cap staging_v2 i18n:update`

`bundle exec cap staging_v3 i18n:update`

`bundle exec cap staging_v4 i18n:update`

`bundle exec cap staging_v5 i18n:update`

`bundle exec cap staging_v6 i18n:update`

---

- #### Kill Process That Use Port 3000 & 3500 & 3600 and run apprentus:

Remove .overmind.sock

`rm -rf .overmind.sock`

List all actives network process in question with their pids:

`sudo netstat --listening --program --numeric --tcp --udp --extend | grep '3000\|3500\|3600'`

Kill pid that appear in the list with:

`kill -9 {{pid_here}}`

Then peacefully start the server again:

`overmind s`

Some other Issue:

If There Is An Error And It Says Something Like "Server Running And Shows You A server.pid", do the following:

`cat tmp/pids/server.pid`

Then put the pid in the next command:

`kill -9 {{pid_here}}`

---

- #### Run Delayed Jobs :
```ruby
Delayed::Job.all.each do |delay|
	Delayed::Worker.new.run(delay)
end
```

---

- #### Test Card:
```
card_number : 5555444433331111
name_on_card : mr anything
card_expiry_month : 03
card_expiry_year : 2030
cvc : 737
```

---

- #### Revert config/locales Pushed By Mistake:
1. git checkout origin/master config/locales => it will synch all those files with master
2. After that you commit again the changes

---

- #### For Logging Purpose:
```ruby
::Rails.logger.info "Debug Text Here #{variable_to_debug}"
```
- To beautify Hash : 
```ruby 
JSON.pretty_generate(@props)
```

---

- #### Fastforward a booking:
```ruby
booking = Booking.last
Booking::SubmitSend.(booking: booking)
Booking::Confirm.(booking: booking, message: 'I confirm!', booking_time: booking.booking_times.preferred_order.first)
Booking::ConfirmSend.(booking: booking)
```

---

- #### Update Any User's Password:
```ruby
user=User.find_by(email: 'email_address')
user.update(password: 'new_password')
```

---

## Organize Imports:
```
// styles
// assets
// libraries
// utils
// components
// shared
// logic
// controller
```

---

- #### List All rake Tasks:
> `$ bundle exec rake --tasks`

---

- #### List All Cap Tasks:
> `$ bundle exec cap --tasks`

---

- #### Check Rails Env:
> `$ rails r "puts Rails.env"`

---

- #### Check Application's Environment:
> `$ bundle exec rake about`

---

- #### Change Rails Env Temporarily:
> `$ export RAILS_ENV=production`

---

- #### Change Rails Env With Command:
> `$ RAILS_ENV=production rake about`