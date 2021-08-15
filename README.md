Merit Badge Tracker
    One scout can have many merit badges
    One merit badge can have many scouts

Backend
	[x] Fork template repo
	[x] Create new repo
    [] Watch videos again to refresh memory and code along changes
	[x] Create seed data
    [x] Table design
        scouts
            scouts_first_name(string),scouts_last_name(string),scouts_troop(int),ID
        badges
            badges_name(string),badges_is_earned(boolean),badges_is_eagle(boolean),ID
    [x] test commands in rake console successful in pulling seed data
    [x] build out routes and logic


Frontend
	[] Fork template repo/npx it
	[] Create new repo
    [] Watch videos again to refresh memory and code along changes
    Requirements
	    [] READ all data
	    [] CREATE new data entry
	    [] UPDATE existing entry
	    [] DELETE existing entry
    Extras
        [] Add routes with filters
		[] Routes are links in header
		[] Present results in formatted tables/printable reports

Error fixes:
    bundle install errored out while installing pg (1.2.3), had to run "sudo apt-get install libpq-dev" to resolve.

    gem file missing sql requirement and database.yml not having sqlite3 as database caused migrations to fail.

    boolean items in seed failing on using "True" "False", read up a bit and it was syntax error, ended up using 1 and 0 in seed
