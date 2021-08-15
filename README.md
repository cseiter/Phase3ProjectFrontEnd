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
	[x] Fork template repo/npx it
	[x] Create new repo
    [] Watch videos again to refresh memory and code along changes
    Requirements
	    [x] READ all data (/badges:get,/scouts:get)
	    [] CREATE new data entry(/badges:post,/scouts:post)
	    [] UPDATE existing entry
	    [] DELETE existing entry
    Design
        [x] app name for header
        [x] build out scouts page
            [x]scouts container
            [x]scout "card"
        [x] build out badges page
            [x]badges container
            [x]badge "card"
    Extras
        [] Add routes with filters - removed, misunderstanding on concept
		[] Routes are links in header - removed, misunderstanding on concept
		[x] Present results in formatted tables/printable reports
        [] add multiple scouts that can be chosen with a dropdown

Error fixes:
    bundle install errored out while installing pg (1.2.3), had to run "sudo apt-get install libpq-dev" to resolve.

    gem file missing sql requirement and database.yml not having sqlite3 as database caused migrations to fail.

    boolean items in seed failing on using "True" "False", read up a bit and it was syntax error, ended up using 1 and 0 in seed
