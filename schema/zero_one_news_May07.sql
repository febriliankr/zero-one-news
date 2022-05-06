-- -------------------------------------------------------------
-- TablePlus 4.6.4(414)
--
-- https://tableplus.com/
--
-- Database: zero_one_news
-- Generation Time: 2022-05-07 02:07:11.5040
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS article_topics_article_topic_id_seq;

-- Table Definition
CREATE TABLE "public"."article_topics" (
    "article_topic_id" int4 NOT NULL DEFAULT nextval('article_topics_article_topic_id_seq'::regclass),
    PRIMARY KEY ("article_topic_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS articles_article_id_seq;

-- Table Definition
CREATE TABLE "public"."articles" (
    "article_id" int4 NOT NULL DEFAULT nextval('articles_article_id_seq'::regclass),
    "title" varchar,
    "content_plain" text,
    "content_html" text,
    "slug" varchar,
    "author" varchar,
    "created_at" timestamptz,
    "updated_at" timestamptz,
    "published" bool,
    "hidden" bool,
    "excerpt" text,
    PRIMARY KEY ("article_id")
);

-- Column Comment
COMMENT ON COLUMN "public"."articles"."published" IS 'If published is false then the article is in draft mode.';
COMMENT ON COLUMN "public"."articles"."hidden" IS 'If hidden is true then the article is ''soft deleted'' and won''t be shown';

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS topics_topic_id_seq;

-- Table Definition
CREATE TABLE "public"."topics" (
    "topic_id" int4 NOT NULL DEFAULT nextval('topics_topic_id_seq'::regclass),
    "title" varchar,
    "description" varchar,
    PRIMARY KEY ("topic_id")
);

INSERT INTO "public"."articles" ("article_id", "title", "content_plain", "content_html", "slug", "author", "created_at", "updated_at", "published", "hidden", "excerpt") VALUES
(1, 'When Negotiating a Price, Never Bid with a Round Number', 'Here’s an easy tip for anyone negotiating to buy a car, a house, or even a company. When you make an initial offer, don’t bid with a round number like $10,000 or $1 million or $15 per share. Rather, bid with a more precise number, like $9,800 or $1.03 million or $14.80 per share.

According to a recent study of mergers and acquisitions, investors who offer “precise” bids for company shares yield better market outcomes than those who offer round-numbered bids.

“IF ONE PARTY GIVES A ROUND NUMBER, IT GIVES THE SIGNAL THAT THE PARTY DOESN’T REALLY KNOW WHAT IT’S DOING”
“It turns out that if you make a precise bid, the targets are more likely to accept it, and more likely to accept it at a cheaper price. And with cash bids, they’ll generate a more positive market reaction,” says Matti Keloharju, a visiting scholar at Harvard Business School and co-author, with Petri Hukkanen, of the paper Initial Offer Precision and M&A Outcomes (pdf).

Their research builds on several previous social psychology studies showing that people place more value on precise numbers than on relatively round numbers. People tend to assume, true or not, that someone must have crunched lots of data to come up with an amount so specific. A round number, on the other hand, suggests that a person is just ballparking it—offering an approximate valuation based on vague knowledge.

In one 2013 study, for example, participants played an online game based on the TV show The Price Is Right, in which they had to guess the market price of three consumer products. Before making their guesses, they received “audience suggestions” for what they should bid. When given the chance to choose which audience members would help them on future bids, participants were least likely to choose those whose suggested bids had ended in zero. (See Show Me the Numbers: Precision as a Cue to Others’ Confidence by Alexandra Jerez-Fernandez, Ashley N. Angulo, and Daniel P. Oppenheimer.)

 The most rounded bids (made at the share-price precision of $5 or $1) were associated with announcement returns of 0.1 percent and 0.2 percent, respectively. Bids made at a greater precision generated returns 2 to 3 percentage points higher.
“If one party gives a round number, it gives the signal that the party doesn’t really know what it’s doing,” Keloharju says.

Precision also indicates determination. As an example, consider these two ways to propose a future rendezvous. “I could say let’s meet in one year, or I could say let’s meet in 365 days,” he says. “Now, if I say the latter one, it sounds pretty serious and precise. But if I say we’ll meet in a year, it sounds like, sure, maybe we’ll meet in a year, but maybe it’ll be more like one and a half years, or maybe some other time.”

Social psychology in finance
Previous research has shown the benefits of precise bidding in the real-estate industry, where a precise listing price indicates that the seller has done legwork to estimate the true value of a house, and is thus less likely to be bargained down. The same holds true for salary negotiations.

Hukkanen and Keloharju wanted to find out whether these social psychology findings held true in the financial market, focusing on mergers and acquisitions for a few reasons: Data involving public companies is readily available in public databases, big M&A transactions have obvious economic significance, and it would be interesting to see how the market reacted to precise bids versus round ones.

To determine the effect of round versus precise bids, the researchers crunched data on some 2,000 initial cash offers made on public US-based companies between 1985 and 2012, looking at the price-per-share number of each offer. Based on what they already knew about the efficacy of precise numbers, they assumed that round-number bids would be in the minority.

But it seemed that the investment bankers hadn’t consulted any social psychologists before making their offers to buy a company. Of the some 2,000 price-per-share bids in their sample, 47 percent were divisible by $1.00—that is, the bankers bid with a share price ending in two zeros after the decimal point.

From the bidder’s point of view, the buyers and the stock markets alike reacted more positively to precise bids versus round ones.

Of the potential buyers whose initial bids were divisible by $5, 69 percent ended up with the winning bid. Of those whose bids were divisible by $1 (but not by $5), 75 percent won their deals. And so on. The more precise the bid, the higher the rate of success.

Precise bidding also increased the likelihood that the targets would accept the bidders’ initial offers. Bidders whose initial bids were divisible by $5 ended up increasing their offers by an average of 18 percent to win the deal. As for those whose bids were so precise that they weren’t even divisible by 25 cents, they only had to increase their bids by an average of 6 percent in order to win.

In terms of how the markets reacted to the bids, the most rounded bids—made at the share-price precision of $5 or $1—were associated with announcement returns of 0.1 percent and 0.2 percent, respectively. Bids made at a greater precision generated returns 2 to 3 percentage points higher. Controlling for a variety of factors, it seemed that success depended simply on adding a few cents to (or subtracting from) a round number.

“If you just avoid making a bid at a round number, then it will tend to generate a more positive announcement reaction,” Keloharju says.

What were the investors thinking?
Having proven the value of precise bids in the M&A realm, the researchers wondered whether the investors who had made precise bids had done so strategically. So they interviewed 10 senior investment bankers at the managing director or executive director level who each had several years of M&A experience. None of the bankers was aware of the academic literature on bid precision.

The bankers were asked to imagine a scenario in which they’d advise a client to make one of two hypothetical initial cash offers, either a round bid of $15 or a precise bid of $15.20 or $14.80 per share.

Only one of the bankers showed a strong preference for the precise bid. While he wasn’t aware of the social science research on the subject, his argument was the same: He reasoned that a round bid indicated that the bidder wasn’t confident of the appropriate price.

Two of the bankers showed a weak preference for the precise option but weren’t sure why; two had no preference. The remaining five preferred the round bid, for no real reason other than that’s the way it had always been done. Fact is, in addition to proving the benefit of using precise numbers, social psychology scholars have shown that people are hardwired to communicate with round numbers, especially when they’re unaware of research telling them to do otherwise.

“Our results cast doubt on the idea that corporate acquirers and their advisors would generally be knowledgeable of the effect initial offer precision has on acquisition outcomes,” Hukkanen and Keloharju write. “The absence of insight of a better option makes it natural for advisors to recommend, and acquirers to follow, the market convention of placing a round offer.”

Fortunately for investors, or for anyone bidding on anything, for that matter, it doesn’t take much effort to change a round number to a precise number. And it doesn’t cost much, either—a few cents per share, in the case of M&As.

“It’s very easy to do,” Keloharju says. “It’s very easy to avoid being round.”

That said, he warns that a bid too precise may make the bidder look suspicious, or even ridiculous, to the recipient. Bidding $1.03 million for a house is one thing. Bidding $1,033,235.83 is another.

“If a bid is too precise, it may strike as strategic to the recipient, rather than being driven by superior information,” Keloharju says. “This may lead the recipient to rethink whether the bid is really informed.”', '<p> Here’s an easy tip for anyone negotiating to buy a car, a house, or even a company. When you make an initial offer, don’t bid with a round number like $10,000 or $1 million or $15 per share. Rather, bid with a more precise number, like $9,800 or $1.03 million or $14.80 per share.</p><p> According to a recent study of mergers and acquisitions, investors who offer “precise” bids for company shares yield better market outcomes than those who offer round-numbered bids.</p><blockquote> “If one party gives a round number, it gives the signal that the party doesn’t really know what it’s doing”</blockquote><p> “It turns out that if you make a precise bid, the targets are more likely to accept it, and more likely to accept it at a cheaper price. And with cash bids, they’ll generate a more positive market reaction,” says Matti Keloharju, a visiting scholar at Harvard Business School and co-author, with Petri Hukkanen, of the paper <a href="http://www.hbs.edu/faculty/Publication Files/16-058_27d73983-3441-4628-906c-10ce5fb7ac47.pdf" target="_blank" class="pdf" >Initial Offer Precision and M&amp;A Outcomes <span class="pdf-append">(pdf)</span></a >.</p>', 'price-negotiation', 'Carmen Nobel', '2022-05-07 01:02:49+07', '2022-05-07 01:03:59.528364+07', 't', 'f', '
Investors who offer “precise” bids for company shares yield better outcomes than those who offer round-number bids, according to research by Petri Hukkanen and Matti Keloharju.'),
(2, 'Never Bid with a Round Number Article', '“It turns out that if you make a precise bid, the targets are more likely to
  accept it, and more likely to accept it at a cheaper price. And with cash
  bids, they’ll generate a more positive market reaction,” says Matti Keloharju,
  a visiting scholar at Harvard Business School and co-author, with Petri
  Hukkanen, of the paper', '<p> Here’s an easy tip for anyone negotiating to buy a car, a house, or even a company. When you make an initial offer, don’t bid with a round number like $10,000 or $1 million or $15 per share. Rather, bid with a more precise number, like $9,800 or $1.03 million or $14.80 per share.</p><p> According to a recent study of mergers and acquisitions, investors who offer “precise” bids for company shares yield better market outcomes than those who offer round-numbered bids.</p><blockquote> “If one party gives a round number, it gives the signal that the party doesn’t really know what it’s doing”</blockquote><p> “It turns out that if you make a precise bid, the targets are more likely to accept it, and more likely to accept it at a cheaper price. And with cash bids, they’ll generate a more positive market reaction,” says Matti Keloharju, a visiting scholar at Harvard Business School and co-author, with Petri Hukkanen, of the paper <a href="http://www.hbs.edu/faculty/Publication Files/16-058_27d73983-3441-4628-906c-10ce5fb7ac47.pdf" target="_blank" class="pdf" >Initial Offer Precision and M&amp;A Outcomes <span class="pdf-append">(pdf)</span></a >.</p>', 'price-negotiation', 'Carmen Nobel', '2022-05-07 01:02:49+07', '2022-05-07 01:03:59.528364+07', 't', 'f', '
Investors who offer “precise” bids for company shares yield better outcomes than those who offer round-number bids, according to research by Petri Hukkanen and Matti Keloharju.');

INSERT INTO "public"."topics" ("topic_id", "title", "description") VALUES
(1, 'Health', 'News about health'),
(2, 'Sports', 'Football, basketball, boxing, and everything about sports world.'),
(3, 'Technology', 'Tech news');

