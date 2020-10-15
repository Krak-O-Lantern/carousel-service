CREATE TABLE places
(listing_id integer PRIMARY KEY,
place_title varchar,
sleeping_arrangement varchar,
image varchar,
price integer,
review_count integer,
review_average decimal,
superhost boolean,
saved boolean);