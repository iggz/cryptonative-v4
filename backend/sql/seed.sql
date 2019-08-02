-- create dummy users
INSERT INTO
users
    (first_name, last_name, email, password)
VALUES
    ('Loretta', 'Westraw', 'lwestraw0@harvard.edu', 'bsneegr'),
    ('Bobby', 'Pawlik', 'bpawlik1@nature.com', 'UPWMrMMb1B4c'),
    ('Freddie', 'Ellins', 'fellins2@redcross.org', 'UmTVujwIDa5'),
    ('Clotilda', 'Matonin', 'cmatonin3@blinklist.com', 'nH7BpyF'),
    ('Shay', 'Furby', 'sfurby4@tuttocitta.it', 'XdpsFQMsR'),
    ('Cale', 'Trenholm', 'ctrenholm5@cpanel.net', 'icF4XddP'),
    ('Fonz', 'Smaling', 'fsmaling6@cpanel.net', 'I1eBuD'),
    ('Reggie', 'Forseith', 'rforseith7@t-online.de', 'inyXvkV9L3'),
    ('Cyndie', 'Dellenbach', 'cdellenbach8@comsenz.com', 'ltVFupFchJfd'),
    ('Wheeler', 'Wotton', 'wwotton9@smh.com.au', 'Pb6pbJv');

-- create dummy portfolios, being sure to appropriately associate
-- user_id with an actual dummy user's user_id
INSERT INTO
portfolios (name, user_id)
VALUES
    (1, 'Consumer Non-Durables', 1),
    (2, 'Consumer Services', 2),
    (3, 'Foreign Currency', 3),
    (4, 'Finance', 4),
    (5, 'Health Care', 5),
    (6, 'Basic Industries', 6),
    (7, 'Public Utilities', 7),
    (8, 'Finance', 8),
    (9, 'Consumer Services', 9),
    (10, 'Foreign Currency', 10),
    (11, 'Consumer Services', 1),
    (12, 'Finance', 2),
    (13, 'Energy', 3),
    (14, 'Energy', 4),
    (15, 'Basic Industries', 5),
    (16, 'Technology', 6),
    (17, 'Finance', 7),
    (18, 'Technology', 8),
    (19, 'Health Care', 9),
    (20, 'Technology', 10);

-- create dummy coins, being sure to appropriately associate
-- both user_id and portfolio_id with an actual portfolio's
-- portfolio_id that's associated with an actual user's user_id
INSERT INTO
coins
    (coin_id, portfolio_id, user_id, name, symbol, amount, price)
VALUES
    (1, 1, 1, 'Skalith', 'BEAT', 88, 777.77),
    (2, 1, 1, 'Yoveo', 'MIII', 56, 334.82),
    (3, 1, 1, 'Flipopia', 'DWLD', 24, 5396.92),
    (4, 2, 2, 'Tazz', 'SNY', 76, 16880.19),
    (5, 2, 2, 'Midel', 'ENFC', 61, 5479.59),
    (6, 2, 2, 'Yata', 'RFP', 34, 14032.86),
    (7, 3, 3, 'Jaxbean', 'AAME', 99, 5689.49),
    (8, 3, 3, 'Yakitri', 'HAL', 66, 5125.98),
    (9, 3, 3, 'Flipbug', 'KTOS', 76, 2881.4),
    (10, 4, 4, 'Tanoodle', 'FIZZ', 87, 10165.34),
    (11, 4, 4, 'Bubbletube', 'PTI', 57, 5085.56),
    (12, 4, 4, 'Jaxbean', 'OTTW', 91, 7477.54),
    (13, 5, 5, 'Realbuzz', 'PUMP', 38, 1205.64),
    (14, 5, 5, 'Skajo', 'PNM', 31, 17472.55),
    (15, 5, 5, 'Fliptune', 'CPSH', 65, 1701.6),
    (16, 6, 6, 'Realmix', 'SINA', 53, 3456.37),
    (17, 6, 6, 'Pixonyx', 'PLPC', 34, 7693.42),
    (18, 6, 6, 'Camimbo', 'BGE^B', 29, 10049.19),
    (19, 7, 7, 'Jamia', 'TAX', 47, 18266.68),
    (20, 7, 7, 'Jaxspan', 'FNTEU', 36, 13836.55),
    (21, 7, 7, 'Tagchat', 'JFR', 96, 3566.71),
    (22, 8, 8, 'Blogspan', 'TDE', 83, 8043.75),
    (23, 8, 8, 'Skalith', 'CRH', 53, 17815.45),
    (24, 8, 8, 'Gabtype', 'ABDC', 9, 14375.25),
    (25, 9, 9, 'Aimbu', 'PPSI', 19, 9029.33),
    (26, 9, 9, 'Mudo', 'SGBX', 18, 7375.42),
    (27, 9, 9, 'Demimbu', 'LPX', 14, 9902.11),
    (28, 11, 1, 'Gabvine', 'SRT', 20, 2990.47),
    (29, 11, 1, 'Topdrive', 'MTB^', 30, 4299.74),
    (30, 11, 1, 'Vipe', 'FSB', 41, 8252.91),
    (31, 12, 2, 'Dynabox', 'SHIP', 13, 17291.86),
    (32, 12, 2, 'Edgewire', 'FCSC', 81, 17132.85),
    (33, 12, 2, 'Devbug', 'MQT', 46, 12395.94),
    (34, 13, 3, 'Gabvine', 'BLL', 100, 13858.39),
    (35, 13, 3, 'Ainyx', 'NVEC', 42, 454.57),
    (36, 13, 3, 'Skiba', 'CPE^A', 39, 13002.5),
    (37, 14, 4, 'Quatz', 'VSEC', 20, 5711.55),
    (38, 14, 4, 'Rhyzio', 'NEM', 6, 12875.41),
    (39, 14, 4, 'Edgeblab', 'DECK', 33, 2699.29),
    (40, 15, 5, 'Quaxo', 'PSA^C', 42, 2338.99),
    (41, 15, 5, 'Gabtune', 'ONCE', 16, 18852.98),
    (42, 15, 5, 'Yodoo', 'YERR', 74, 1411.97),
    (43, 16, 6, 'Feedspan', 'JELD', 41, 7288.02),
    (44, 16, 6, 'Npath', 'CHT', 70, 1626.41),
    (45, 16, 6, 'Topicware', 'TV', 44, 18599.69),
    (46, 17, 7, 'Mycat', 'EMKR', 25, 12820.27),
    (47, 17, 7, 'Trupe', 'NDRO', 83, 2117.55),
    (48, 17, 7, 'Talane', 'NTRP', 100, 9536.44),
    (49, 18, 8, 'Agivu', 'MFA', 90, 12159.05),
    (50, 18, 8, 'Rhynoodle', 'COUP', 10, 11832.65),
    (51, 18, 8, 'Rhyzio', 'VLY^A', 80, 827.99),
    (52, 19, 9, 'Devpoint', 'KMX', 3, 17971.81),
    (53, 19, 9, 'Centizu', 'AXS', 82, 17117.73),
    (54, 19, 9, 'Zooxo', 'APPF', 1, 17697.01),
    (55, 20, 10, 'Mynte', 'AEO', 44, 13440.85),
    (56, 20, 10, 'Thoughtstorm', 'BXE', 13, 19790.16),
    (57, 20, 10, 'Realblab', 'JASNW', 59, 14230.68),
    (58, 10, 10, 'Browsecat', 'MSFT', 49, 13418.1),
    (59, 10, 10, 'Flashspan', 'GG', 39, 954.6),
    (60, 10, 10, 'Centizu', 'WINA', 80, 15552.3);