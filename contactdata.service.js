(
    function () {
        var app = angular.module("ContactApp");
        app.service("ContactDataSvc", function () {

            this.contacts = [{
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "logan",
                        "last": "singh"
                    },
                    "location": {
                        "street": "9590 peel st",
                        "city": "summerside",
                        "state": "northwest territories",
                        "postcode": 66130
                    },
                    "email": "logan.singh@example.com",
                    "login": {
                        "username": "purpledog885",
                        "password": "inter",
                        "salt": "6GtzWWm3",
                        "md5": "cd2d3919c56201fda3609ed447c27307",
                        "sha1": "0e3ea802e0d0fdcba1280d6c0a6853e291ac00b9",
                        "sha256": "e47fe7e6ed8b100969177d2a4e594667788ffa9104ac35e69ad7a77999071693"
                    },
                    "dob": "1992-09-08 15:51:06",
                    "registered": "2009-05-29 02:29:48",
                    "phone": "135-486-9288",
                    "cell": "878-173-7116",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/83.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
                    },
                    "nat": "CA"
        }, {
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "iker",
                        "last": "benitez"
                    },
                    "location": {
                        "street": "5260 calle del prado",
                        "city": "mérida",
                        "state": "extremadura",
                        "postcode": 84389
                    },
                    "email": "iker.benitez@example.com",
                    "login": {
                        "username": "silverlion566",
                        "password": "tucker",
                        "salt": "acNlhfAw",
                        "md5": "11291126275da8a84cfd5307467ad57a",
                        "sha1": "2b72d524109ce94242236940e4a59a93502745f7",
                        "sha256": "d899c6cdebb534553f3d60c406d7949053661a5ec1525cbb21429c2151b1b651"
                    },
                    "dob": "1985-04-13 22:19:47",
                    "registered": "2003-05-19 07:33:00",
                    "phone": "924-624-131",
                    "cell": "615-576-253",
                    "id": {
                        "name": "DNI",
                        "value": "28662700-M"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/98.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/98.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/98.jpg"
                    },
                    "nat": "ES"
        }, {
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "eren",
                        "last": "tüzün"
                    },
                    "location": {
                        "street": "9239 anafartalar cd",
                        "city": "aydın",
                        "state": "gaziantep",
                        "postcode": 36783
                    },
                    "email": "eren.tüzün@example.com",
                    "login": {
                        "username": "silverduck580",
                        "password": "pacific",
                        "salt": "W83eDsrA",
                        "md5": "965477a3fcd325bc427c493a2e5868fe",
                        "sha1": "9ddaee947d38d418cf60189464a34264692583d4",
                        "sha256": "bc5e8782c5aba7d3d16d32ef776e14016ca27f7192e040f219f1709165332640"
                    },
                    "dob": "1952-04-09 15:22:10",
                    "registered": "2011-10-09 04:56:25",
                    "phone": "(144)-680-9847",
                    "cell": "(203)-731-7905",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/39.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/39.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
                    },
                    "nat": "TR"
        }, {
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "احسان",
                        "last": "سهيلي راد"
                    },
                    "location": {
                        "street": "6215 نبرد",
                        "city": "بابل",
                        "state": "کرمانشاه",
                        "postcode": 24671
                    },
                    "email": "احسان.سهيليراد@example.com",
                    "login": {
                        "username": "silverlion989",
                        "password": "devildog",
                        "salt": "HMvxVGJC",
                        "md5": "6c49f6efc8ba09a012b4475c1d8a027b",
                        "sha1": "71f6d35809c00222e7ccb5cb367d966c40487ebb",
                        "sha256": "c4ba552f86799fb028741e00e18c40a97ae4e3bc5c30ccd684a1b19fcb0404bd"
                    },
                    "dob": "1953-12-18 19:10:01",
                    "registered": "2004-09-08 01:42:33",
                    "phone": "090-25283499",
                    "cell": "0966-573-9199",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/29.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
                    },
                    "nat": "IR"
        }, {
                    "gender": "female",
                    "name": {
                        "title": "miss",
                        "first": "isa",
                        "last": "van roode"
                    },
                    "location": {
                        "street": "5060 dorstige hartsteeg",
                        "city": "heerde",
                        "state": "zuid-holland",
                        "postcode": 56342
                    },
                    "email": "isa.vanroode@example.com",
                    "login": {
                        "username": "beautifulostrich778",
                        "password": "twelve",
                        "salt": "9K10Cv5h",
                        "md5": "4459d999741fc076cf1e8a08cec2330b",
                        "sha1": "c05b3c446b2b784b0241bf6f0cc94f71129d8cd7",
                        "sha256": "e33510858429f977a6c5988738bdf7fd9714e778b1663db10d84e4b321103645"
                    },
                    "dob": "1969-12-21 00:36:45",
                    "registered": "2008-09-10 06:07:20",
                    "phone": "(160)-382-3472",
                    "cell": "(595)-694-5596",
                    "id": {
                        "name": "BSN",
                        "value": "64212366"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/33.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
                    },
                    "nat": "NL"
        },
                {
                    "gender": "female",
                    "name": {
                        "title": "mrs",
                        "first": "liva",
                        "last": "jensen"
                    },
                    "location": {
                        "street": "7026 parcelvej",
                        "city": "nørre sundby",
                        "state": "danmark",
                        "postcode": 77874
                    },
                    "email": "liva.jensen@example.com",
                    "login": {
                        "username": "yellowdog711",
                        "password": "defender",
                        "salt": "pSJKCHhR",
                        "md5": "13ecc69707618450a95cadcad39957f1",
                        "sha1": "a0fdf70bad1bc8729c33e8151a89e38e4d793bea",
                        "sha256": "eebafed2686df37f6817bfa2f6697d92722a6f1328fc8f64d41ae1a4e93e25e9"
                    },
                    "dob": "1981-06-03 17:15:51",
                    "registered": "2011-01-14 04:46:02",
                    "phone": "32313254",
                    "cell": "92464847",
                    "id": {
                        "name": "CPR",
                        "value": "095777-0655"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/62.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
                    },
                    "nat": "DK"
        }, {
                    "gender": "female",
                    "name": {
                        "title": "mrs",
                        "first": "sanni",
                        "last": "justi"
                    },
                    "location": {
                        "street": "8973 tahmelantie",
                        "city": "luvia",
                        "state": "south karelia",
                        "postcode": 82887
                    },
                    "email": "sanni.justi@example.com",
                    "login": {
                        "username": "blackgorilla313",
                        "password": "tang",
                        "salt": "7qjSvA0b",
                        "md5": "d44d25be96724abbbcaa1a46429fb12e",
                        "sha1": "8d2731ffcc2d1ad57203951cb76037ff80f1f902",
                        "sha256": "b9f096d81defd5f5bbce409f7a7dd9ae44c2ce5e0d994784a2844a61b8cdfb17"
                    },
                    "dob": "1953-11-13 17:58:32",
                    "registered": "2011-01-23 15:10:25",
                    "phone": "02-145-909",
                    "cell": "047-603-42-32",
                    "id": {
                        "name": "HETU",
                        "value": "1553-780X"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/69.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
                    },
                    "nat": "FI"
        }, {
                    "gender": "female",
                    "name": {
                        "title": "mrs",
                        "first": "josina",
                        "last": "de souza"
                    },
                    "location": {
                        "street": "6026 rua um",
                        "city": "formosa",
                        "state": "paraná",
                        "postcode": 84354
                    },
                    "email": "josina.desouza@example.com",
                    "login": {
                        "username": "goldenfrog932",
                        "password": "sharky",
                        "salt": "4uIkhEWu",
                        "md5": "5b466ff07edc8389da0b1bee7bb3c16f",
                        "sha1": "821dc9fc60b2e589a31d6ca94a95ff13e1ec2ca2",
                        "sha256": "7188e09f3e18f66e57d3190d0d0d60d63f67e81186f1ab0a660d46f7ea9fc87c"
                    },
                    "dob": "1972-07-22 13:04:32",
                    "registered": "2016-06-30 10:13:02",
                    "phone": "(13) 3146-4896",
                    "cell": "(12) 4604-7273",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/1.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
                    },
                    "nat": "BR"
        }, {
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "jose",
                        "last": "griffin"
                    },
                    "location": {
                        "street": "8744 park road",
                        "city": "stirling",
                        "state": "county antrim",
                        "postcode": "M3B 2BW"
                    },
                    "email": "jose.griffin@example.com",
                    "login": {
                        "username": "orangegoose461",
                        "password": "goochi",
                        "salt": "CkjyyM9p",
                        "md5": "f644edb4774782c876ca80a98b407344",
                        "sha1": "8fcb56ff3d9c01f32537b0a263d559fa2fd18197",
                        "sha256": "38f027e9045208d4d0811f8a9ceeb516fc760f107ee6039a38dee99ef9b987f6"
                    },
                    "dob": "1967-07-28 04:23:01",
                    "registered": "2002-03-25 11:34:04",
                    "phone": "016977 0957",
                    "cell": "0708-805-150",
                    "id": {
                        "name": "NINO",
                        "value": "XN 00 77 90 Z"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/9.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
                    },
                    "nat": "GB"
        }, {
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "ezio",
                        "last": "roussel"
                    },
                    "location": {
                        "street": "3786 rue de l'abbé-roger-derry",
                        "city": "caen",
                        "state": "guyane",
                        "postcode": 43953
                    },
                    "email": "ezio.roussel@example.com",
                    "login": {
                        "username": "smalltiger662",
                        "password": "unicorn",
                        "salt": "FZvGvwxI",
                        "md5": "99722a8d36d18f414c3272a196a938c0",
                        "sha1": "c27491cfc1446301e9fb6c958f2790debc4894f1",
                        "sha256": "573fe198db23fed93c7e14e41d815a24d4db3714c1321c91bde40ebf3b46e228"
                    },
                    "dob": "1950-06-04 15:21:03",
                    "registered": "2007-08-30 04:12:02",
                    "phone": "05-48-13-95-17",
                    "cell": "06-55-09-05-63",
                    "id": {
                        "name": "INSEE",
                        "value": "150561036228 40"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/98.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/98.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/98.jpg"
                    },
                    "nat": "FR"
        }
                    ];

        });

    }

)();
