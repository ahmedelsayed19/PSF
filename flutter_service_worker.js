'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "22eed8b0a9e01e9b1e2422a30fafeb14",
"version.json": "b056fdb54304c364f389fe0ef633caf4",
"index.html": "8968a144627dd599dec1110157dd3070",
"/": "8968a144627dd599dec1110157dd3070",
"main.dart.js": "fb484693faf99cf454f560280e60b00a",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1aaf8c8ccc161cb5d5991d020291fb26",
"assets/NOTICES": "901e7665a69baf09a07e25a86dde193c",
"assets/FontManifest.json": "612a04bb87aa6ed9932b3570ec476667",
"assets/AssetManifest.bin.json": "c96eafa0549891a81180b2ba25dfc9a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/mobkit_dashed_border/images/type2.png": "17a23dec244c3d1bb5b4ae67d7bd48b3",
"assets/packages/mobkit_dashed_border/images/type3.png": "2d50ab9d78a15b2f20012c3b9ea56c46",
"assets/packages/mobkit_dashed_border/images/type1.png": "9f8e612a54622229bd4b97e5357a473c",
"assets/packages/mobkit_dashed_border/images/type4.png": "9250b4ccf17768b5c7d6afcaebadf3f9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "13d83fcc2418fd514e20fe3e28be63eb",
"assets/fonts/MaterialIcons-Regular.otf": "7bac58d90b2994b459d16c9a3afc213a",
"assets/assets/images/demo/nvidia.jpg": "0ba8cd3541dbed8eee518b1166be465c",
"assets/assets/images/demo/dell.jpg": "7a9ddef28cd45da56bb4965a03ecdaa9",
"assets/assets/images/demo/news-2.jpg": "695ac2238abd78ac582579a9cc757463",
"assets/assets/images/demo/microsoft.jpg": "904b96aa9742cadc9cfb49d21fe4c97c",
"assets/assets/images/demo/news-1.jpg": "e4b2d6106fd4b1ecbcd10460daeb2c51",
"assets/assets/images/demo/event-2.jpg": "debb5263e202d92ce3860b212c586303",
"assets/assets/images/demo/session-1.jpg": "8bde6af46b0f5b444b44178f81c4566d",
"assets/assets/images/demo/apple.jpg": "20a6728a838d6a9ca7befc55863f75d8",
"assets/assets/images/demo/event-1.jpg": "dbbf189ad57b866d4aa1f5ef997e6ed2",
"assets/assets/images/demo/iphone.jpg": "8cac512738bee50b7f780780fa65cebd",
"assets/assets/images/demo/macbook.jpg": "93cddda8135e2d8975ea8db33238847d",
"assets/assets/images/demo/hp.jpg": "4eeef660c5d31c7ebc3abc7902b30121",
"assets/assets/images/demo/msi.jpg": "c37a5bb1a2965ec62e9c7953b7de3bc1",
"assets/assets/images/demo/asus.jpg": "9161d8c72fd5224a71af304a95607e61",
"assets/assets/images/demo/ipad.jpg": "15f5bbeacca4e33eb2d986ad33cec19a",
"assets/assets/images/demo/google.jpg": "eb921b50b152da9fae265c6a510fa771",
"assets/assets/images/demo/acer.jpg": "be82a429b2cbdf0fc370e1308b52b93b",
"assets/assets/images/onboarding_1.svg": "bc66cfe8b1b2f092c66f79bc65b03b15",
"assets/assets/images/scanner_screen_background.svg": "577e978799b9560e5649e63d30d39fc1",
"assets/assets/images/placeholders/header_image_picker_holder.svg": "1fa4270a90301cba0be168ae1cb1294c",
"assets/assets/images/logos/logo-lg.svg": "dde531e260ff394e4c5eb47ca10a4252",
"assets/assets/images/logos/rocket.png": "5affefdf9eb584252ca03ad1c262af5c",
"assets/assets/images/logos/logo-w.svg": "67f52f7df9c92d8bb856f14fbf467376",
"assets/assets/images/logos/powered-by-b.svg": "6733473b43a169b5e547f3ad7d1b1aa9",
"assets/assets/images/logos/powered-by-w.svg": "fd310f6ef76a4ea6bc5aaa8a8ce7acac",
"assets/assets/images/slots_background.svg": "298bbfbd6cc0e93d6f6485607525e26f",
"assets/assets/images/splash_screen_background.png": "893cf8a8b975ec851e38c7569b9b6e5b",
"assets/assets/images/print-screen-loading.svg": "7195c2725e2bdd2c8642abfacabe6417",
"assets/assets/images/messageemptyview.svg": "dfc6a7389fa9a1ac4e249692b8f64f22",
"assets/assets/images/facebook.svg": "99f9aa5da57d0ac7aef5f690363e7a2f",
"assets/assets/images/google.svg": "16858d593b5c519589affc8802c3809d",
"assets/assets/images/people/people_1.jpg": "da8f46ba9be5af261bd17d4086d19706",
"assets/assets/images/people/people_2.jpg": "80e7811ddbea225e56bd97adb84748be",
"assets/assets/images/people/people_3.jpg": "48e5aff971967cc77b524c2ff11d0ca5",
"assets/assets/images/people/people_6.jpg": "1353739a0d1956525edae8279c44c22c",
"assets/assets/images/people/people_4.jpg": "002efe6ae5a64a8a03fcbaeb4795605e",
"assets/assets/images/people/people_5.jpg": "39a810f77b2d2067e5fab2e7dc3e917d",
"assets/assets/images/pending_payment_background.svg": "074ec50059a1c3cef5b00b4de9a372c5",
"assets/assets/audio/alarm.mp3": "7e7ad2e734c3f41ea718759b2ff1b3cf",
"assets/assets/audio/beep.mp3": "d932c60652acf60924987457c32a3c44",
"assets/assets/icons/hall.svg": "64a87dfa913918c653c40b4ad9f45bf6",
"assets/assets/icons/message-question-circle.svg": "4a01ad7a894b61daaf86dadf3a8a93dc",
"assets/assets/icons/search.svg": "c4b9319015d1a58382bffa931020693d",
"assets/assets/icons/grid-view.svg": "5a94a12c0067d32206cb21777b473400",
"assets/assets/icons/camera-plus.svg": "1a47611aa11959620704485eb7e0045d",
"assets/assets/icons/arrow-down.svg": "b5c49a2960f8ecd92d4a0d8fe0ec35c3",
"assets/assets/icons/help-octagon.svg": "88379005baaf35535353845a55bf6964",
"assets/assets/icons/camera-1.svg": "5f6f4b54cc9fecc9bf954fc79de1f09c",
"assets/assets/icons/passes-ticket.svg": "a017a297e9e392e742a7064c52bc1bf7",
"assets/assets/icons/folder-upload.svg": "f35343abe260d80e9b310c21a102fcf9",
"assets/assets/icons/check-out.svg": "33f6061f80cc04bdeabee2af3dd639dc",
"assets/assets/icons/message-dots.svg": "20ee337bcd62df5835c682dc3c82c86b",
"assets/assets/icons/violation-circle-2.svg": "fa3ac5df531b306a27402f18c20be9fb",
"assets/assets/icons/help-circle-cropped.svg": "5ea120963d346b4c6a57176775d8ef89",
"assets/assets/icons/reset.svg": "e4bfc48513fe7dd1f43eb93f918fb5df",
"assets/assets/icons/hourglass.svg": "39b5d4aca1d73f41667bef3f2689d594",
"assets/assets/icons/social-media/x.svg": "9ee9cb5e43aa65fb8b68fffddf4ffc6a",
"assets/assets/icons/social-media/instagram.svg": "3e1d89c83e02f768a0a1a17890480a4d",
"assets/assets/icons/social-media/facebook.svg": "0c4cdffa31a6b70b3a7cf5446fb1d4d1",
"assets/assets/icons/social-media/linkedin.svg": "a673c0ba916f9e28a72c55e4075f2bbd",
"assets/assets/icons/user.svg": "c8a802f073df6cb73d400cdafeba85ea",
"assets/assets/icons/contact-mail-bg.svg": "4c6ab9cb8ce243a2402ee26aa95ffc74",
"assets/assets/icons/purchased-passes.svg": "009e86a58209ba10caf9f5ba863e3001",
"assets/assets/icons/edit-2.svg": "4f3672d873f91d54b3fc991102b372ca",
"assets/assets/icons/sliders.svg": "53fe4a9fd5dfe9d53b293c70e3105f47",
"assets/assets/icons/logout.svg": "506c8446d2ef52d96269c6e09ade63f1",
"assets/assets/icons/violation-circle-cropped.svg": "239ebdebefb129c201b67a0b31d4620b",
"assets/assets/icons/polls-card.svg": "e7b1ebfb33313c59630baef49bcc0096",
"assets/assets/icons/ticket.svg": "551a980d686d225a383b6841af2d1ccc",
"assets/assets/icons/briefcase.svg": "a3c6f234fd6e79c101064e4caa7d7e21",
"assets/assets/icons/flag-plus-2.svg": "4d96fa7d16cd14dea9fdef95f3bf4299",
"assets/assets/icons/drag.svg": "43b185aba70bff6671179639d51be1ed",
"assets/assets/icons/chat/doc.svg": "e2ad32b3160a7c10145ae21cbaed112c",
"assets/assets/icons/chat/emoji.svg": "f2bd4dcf54e509e34cef93c9f76fe5e2",
"assets/assets/icons/chat/cameraa.svg": "0291ad6bb6735b66a9782266d6a14dc7",
"assets/assets/icons/chat/mic.svg": "fdf039cc090bb271c274c0b2e9cfff31",
"assets/assets/icons/chat/send.svg": "810b81bc334e11244b62940bbc903ee5",
"assets/assets/icons/chat/error.png": "7e770cf080e7a8c733c17842e76cd00a",
"assets/assets/icons/printing-pass-background.png": "3be0aff5c2c7b410d63bff79ba0df3ce",
"assets/assets/icons/file.svg": "7c26ce264302ab2dd1ced128e57e5bee",
"assets/assets/icons/custom-tabs/sessions.svg": "551a980d686d225a383b6841af2d1ccc",
"assets/assets/icons/custom-tabs/polls.svg": "28afe326e6cbd8b26fed9df58d63b191",
"assets/assets/icons/custom-tabs/surveys.svg": "9cbafa2419fe8d714c952f5ce8a943b3",
"assets/assets/icons/custom-tabs/my-sessions.svg": "0dc8fbc9b78bb23a1853e35a7174e42d",
"assets/assets/icons/quick-scan.svg": "3ef5d94b206736bd7af6e3a02c2d67ed",
"assets/assets/icons/x.svg": "356c361a76f244f72bf73447a6f340bf",
"assets/assets/icons/lock.svg": "633f59144de809a8e6dda0c4176c3138",
"assets/assets/icons/clock-from.svg": "fd14643ab71d01762b92aa2a52e8b5c2",
"assets/assets/icons/calendar-plus.svg": "ab351abf9f363d90861c47dba644d142",
"assets/assets/icons/qrcode.svg": "04e11f63b72317be1b1fe62947f345c9",
"assets/assets/icons/calendar-check.svg": "2cef1ddabfccbf35a80a2a62e7c2b6f8",
"assets/assets/icons/pending-o.png": "b8392a46db82fc4e1f7982d8d6f40a73",
"assets/assets/icons/mail.svg": "4a7a4230f94bbbfc1aaad2fbf3a37442",
"assets/assets/icons/note.svg": "b19d451cdfef3d290a54fec3cd19edeb",
"assets/assets/icons/clock-to.svg": "2e3a8e1dd4697132cda2e2b5348a33a1",
"assets/assets/icons/user-plus.svg": "5ef291fa7078c02bcfce285a38ba9f4e",
"assets/assets/icons/home-tabs/speakers.svg": "b25aa6afb4d327edb221211cc07959ad",
"assets/assets/icons/home-tabs/following.svg": "031025a282f12d15fdf8e5b2a730330e",
"assets/assets/icons/home-tabs/networking.svg": "031025a282f12d15fdf8e5b2a730330e",
"assets/assets/icons/home-tabs/sessions.svg": "a36f1bce282238cb7bbb65075963b9d1",
"assets/assets/icons/home-tabs/chats.svg": "fbcc8afeb933ddd4fed9823db018f85e",
"assets/assets/icons/home-tabs/news.svg": "05548def08439c77c56f12f9aef9a7c3",
"assets/assets/icons/home-tabs/badge.svg": "fbcc8afeb933ddd4fed9823db018f85e",
"assets/assets/icons/home-tabs/agenda.svg": "7ba84aa737dd95fa17931401150aa6c2",
"assets/assets/icons/home-tabs/favorites.svg": "169b4e3098144b646f1561418c20580d",
"assets/assets/icons/home-tabs/products.svg": "01d4e78a5e99f72e58190d2346c5b5e8",
"assets/assets/icons/home-tabs/profile.svg": "49f9e2497bed7114c8a5bb861a71acdd",
"assets/assets/icons/navigation/search.svg": "4bd257d1f242fb5947dfa108c0d8abd1",
"assets/assets/icons/navigation/exhibitors.svg": "19d36be8e56e523175dd4f257f18d41b",
"assets/assets/icons/navigation/speakers.svg": "6f66cd745f0b2a95385052cb52c50370",
"assets/assets/icons/navigation/home.svg": "2d81d321a58f2284a1afbfdcb4cc394f",
"assets/assets/icons/navigation/logout.svg": "71e00eda250aa57c5dc2bae3452f66fb",
"assets/assets/icons/navigation/drawer.svg": "e92b5737d0c61891c8844667ec10e988",
"assets/assets/icons/navigation/following.svg": "5ef291fa7078c02bcfce285a38ba9f4e",
"assets/assets/icons/navigation/networking.svg": "ce2e3c8b6531cf3d1d4a9e66ddf64bf8",
"assets/assets/icons/navigation/sessions.svg": "ddf82267a2c91c6e5032d2ca3fda6f61",
"assets/assets/icons/navigation/settings.svg": "9558102df32a2c5f2e0c8f293b1f11d8",
"assets/assets/icons/navigation/download.svg": "a83a42780b05270c6067a39d1a8d5ef3",
"assets/assets/icons/navigation/gallery.svg": "e4c0bf2d12be0241696bf143d3c10ad8",
"assets/assets/icons/navigation/requests.svg": "57522cbf36a9eff552d14731e1dbd6c5",
"assets/assets/icons/navigation/chats.svg": "20ee337bcd62df5835c682dc3c82c86b",
"assets/assets/icons/navigation/floorplan.svg": "c3fb760076e48d2c3a7d3f727cf9f5f9",
"assets/assets/icons/navigation/news.svg": "9daa378aa2e40472f2862e6f3d2ca458",
"assets/assets/icons/navigation/forms.svg": "3a599ded3ac60a563e3f0df3f2cc974d",
"assets/assets/icons/navigation/badge.svg": "a18b0a48ccf8865cd045cef2bbf09408",
"assets/assets/icons/navigation/messages.svg": "975785741a6776a3bb1faa088295e9cf",
"assets/assets/icons/navigation/agenda.svg": "51fba9ff04b5eb829623ec40dd72c58b",
"assets/assets/icons/navigation/favorites.svg": "736d7ff795808bbc30b68d3f18569dee",
"assets/assets/icons/navigation/products.svg": "0d7666630b620d2ad6dbc5eb4a5900af",
"assets/assets/icons/navigation/announcement.svg": "0dc8fbc9b78bb23a1853e35a7174e42d",
"assets/assets/icons/navigation/profile.svg": "444971bb7271116237f3ef0150cfd24b",
"assets/assets/icons/navigation/polls-and-surveys.svg": "ac1bc0673e939c2ad3bdb850e4f3c4ca",
"assets/assets/icons/navigation/leads.svg": "4e8145b34d40266b0bf24ebf598ee48f",
"assets/assets/icons/check-in.svg": "689319fcf90f68adeef6d7d45a95a3b2",
"assets/assets/icons/bell.svg": "8052695e40bd16522d8352083d249332",
"assets/assets/icons/print-tickets.svg": "f466fc27eceac7b2ac01f1a12f062ca3",
"assets/assets/icons/switch-camera.svg": "52e02079da1b46ff2393d518b2844a87",
"assets/assets/icons/user-remove.svg": "1364751f17b680cb76a08946d63932b0",
"assets/assets/icons/calendar-rotated.svg": "8f175e7c3e776df0a1f9adbfc6768b48",
"assets/assets/icons/navigation-pointer.svg": "e32556b5ae5416822e51b595338dcdce",
"assets/assets/icons/check.svg": "8719f553c1787c286154b8c276771e52",
"assets/assets/icons/pie-chart.svg": "661141d42febae16852d747d504dc6e4",
"assets/assets/icons/live.gif": "8d109d656979df713515c816706bbb86",
"assets/assets/icons/info.svg": "95f60252b74f21139ba3beb3f8e76104",
"assets/assets/icons/gear.svg": "8eb86b5eb6cc8faeab5700382feb0db1",
"assets/assets/icons/info-circle.svg": "5a7917d9091151e4c4b0f0c27296ec61",
"assets/assets/icons/list-view.svg": "26a64d76abd65b5f7fe93a8ff341af23",
"assets/assets/icons/copy.svg": "5da6c7813890f437b3205c849781229c",
"assets/assets/icons/pending.svg": "1ffd9ee5c37c40e3937e97cb6a02971a",
"assets/assets/icons/live.svg": "c6105284f6f416da571b793e91c146f1",
"assets/assets/icons/users-check.svg": "6b1fbc11603789453ba96677942ff778",
"assets/assets/icons/check-blue.svg": "12c149987b33c260e182814705b19501",
"assets/assets/icons/image.svg": "65b24dcc03125ed13e472425edf62b6d",
"assets/assets/icons/check-circle.svg": "2141aa8cc945b47869f1181068efea2d",
"assets/assets/icons/alert-triangle-2.svg": "d79fd66f6b48de1134349a0339a0fd0a",
"assets/assets/icons/contact-phone-bg.svg": "ff76b0a69beead9cd602b0c273f55f95",
"assets/assets/icons/message.svg": "c6ba4e20fdf2271bd09ebcf88b5661b9",
"assets/assets/icons/thumbs-up.svg": "ae5ff06777f3e4c643d6cd3659b3a77f",
"assets/assets/icons/send.svg": "c3d8401fd981712a178cdefafda7426e",
"assets/assets/icons/camera.svg": "fe453d004d064b5c2706c485fe2ee355",
"assets/assets/icons/alert-triangle-3.svg": "7c99174e2d35c06d1adc10579b326327",
"assets/assets/icons/printer.svg": "888e5df3c0ed3a277f48ae95ae70331d",
"assets/assets/icons/purchase-history.svg": "1f028f0b4c33d417b3262a2c42381243",
"assets/assets/icons/empty-slot.svg": "c49bcc7a3553891bf73a10af4899f477",
"assets/assets/icons/trash.svg": "b88877edaeaa3b7606f722dfadf2608b",
"assets/assets/icons/violation-circle.svg": "d30fd46a2c7048fd4d82bf778922a179",
"assets/assets/icons/image-circle.svg": "d961862d28f57e6075f46f12c1a7763e",
"assets/assets/icons/form.svg": "697892d807d9514145a5ac44704cddac",
"assets/assets/icons/face-id.svg": "48bf5316633ba82cc4f86e49f8add25a",
"assets/assets/icons/edit.svg": "5e66645f718cee9da027b97e2650981d",
"assets/assets/icons/folder-download.svg": "d697ff92a8bbf7620b466be4597a7ca7",
"assets/assets/icons/clock.svg": "2f433a0480bcc8b779921c9a39972b24",
"assets/assets/icons/phone.svg": "f6fa6dc8a8f67e43e2759aa939d3a090",
"assets/assets/icons/flag_plus.svg": "57522cbf36a9eff552d14731e1dbd6c5",
"assets/assets/icons/announcement.svg": "0dc8fbc9b78bb23a1853e35a7174e42d",
"assets/assets/icons/opportunities-section.png": "2cb7395b4cb8a4a5947e628321b394c3",
"assets/assets/icons/share.svg": "7ee495a28218a5f8f880f268e5f1fbe4",
"assets/assets/icons/ticket-type.svg": "26d5d9165296fe20ed0203e5269bbfb2",
"assets/assets/icons/tags.svg": "6c7382963ceb29196068d8f7ced16e6a",
"assets/assets/icons/arrow-up.svg": "d019c6e03d7f7d1b97c9365d5d51bceb",
"assets/assets/icons/map-pin.svg": "129aab39b3c42d1bd1cc9c8f84f5c7f0",
"assets/assets/icons/filter.svg": "eddf86a35b0c34220eaad3304f07f08b",
"assets/assets/icons/calendar.svg": "1178c4c90c2b431f8f78632c5da1c243",
"assets/assets/icons/empty-screens/search.svg": "58e1e2326da1b5f7778f7bcdb9d45605",
"assets/assets/icons/empty-screens/speakers.svg": "a540bbf83d4f736058ff62f3d894e45c",
"assets/assets/icons/empty-screens/meeting-rooms.svg": "08973177c9635ce80e0100a80ba8279f",
"assets/assets/icons/empty-screens/following.svg": "ca1932b4ee4a6ce5f2666ff60e67e23c",
"assets/assets/icons/empty-screens/sessions.svg": "abd3abc7fa260c736975e27838eb2945",
"assets/assets/icons/empty-screens/news.svg": "a7e5bc1e775abf07c3f1c890ff703899",
"assets/assets/icons/empty-screens/agenda.svg": "ca2a7c993ab91a4ca916c0f3bdb03acf",
"assets/assets/icons/empty-screens/favorites.svg": "ac4295acbfab553d4fc1f414c207b808",
"assets/assets/icons/empty-screens/products.svg": "8b48c5db9f0dae85442f548c6e340922",
"assets/assets/icons/empty-screens/notifications.svg": "51ac13f5056e202041f58b0a608d5d09",
"assets/assets/icons/empty-screens/polls-and-surveys.svg": "e9862a543109d084d414d25463ff266e",
"assets/assets/icons/minus-circle.svg": "47310012726baa1b08c950011ad403aa",
"assets/assets/icons/rating-star.svg": "1efe571253fdfec9312a4bc6a7485d19",
"assets/assets/icons/leads-cropped.svg": "7e8df5cb18efc290edf8d4ceb8dafacc",
"assets/assets/icons/alert-triangle.svg": "6f29d923755786e3ed3374f47fe566cb",
"assets/assets/icons/rocket.svg": "62c986bca1aefe5d50f5fe43ca8ffb80",
"assets/assets/icons/user-check.svg": "2671352074cb9cf30f46b7f6a3012176",
"assets/assets/icons/contact-address-bg.svg": "07fec9f23d6084f75cf27252c16d55de",
"assets/assets/icons/block.svg": "f44da1f3ac06ba6ce1e8fe9bc7d8068a",
"assets/assets/icons/check-circle-2.svg": "3e0c2f091e98e5c33335b4aedbf4eaeb",
"assets/assets/icons/building-rotated.svg": "fd89191b80c5363bf6fccf79dec93e09",
"assets/assets/icons/users.svg": "a64ef15da6ffdb4d192cf45430ddbea2",
"assets/assets/icons/fingerprint.svg": "516be8408a04fbc4e568ab679a2fe365",
"assets/assets/icons/help-circle.svg": "edbf48c050f5103ac84b67713530e599",
"assets/assets/icons/image-error.svg": "2e8245e8c1f6c2f2615eed548623ef59",
"assets/assets/icons/heart.svg": "81fc5e124a052a4c1e5d6b0e1e3573be",
"assets/assets/lottie/oops.json": "dbffd8157c049542ca3fd445df2a38ec",
"assets/assets/fonts/cairo/Cairo-VariableFont_Weight.ttf": "d5664f46ff376cb597c2e18ec22f9b38",
"assets/assets/fonts/gilroy/Gilroy-RegularItalic.ttf": "b564aec808c412ff20b83a2d779122b5",
"assets/assets/fonts/gilroy/Gilroy-Regular.ttf": "31ff7c1a62a300dbbf9656b4ba14a0d5",
"assets/assets/fonts/gilroy/Gilroy-SemiBold.ttf": "a5cf732b15078843b237bd58f3ed44cd",
"assets/assets/fonts/gilroy/Gilroy-Bold.ttf": "b381c2abd2972024a6a7e3d882208d9b",
"assets/assets/fonts/fund/Fund-Medium.ttf": "5352942fa58e38961c8f9268b5a2b9a5",
"assets/assets/fonts/fund/Fund-SemiBold.ttf": "273b061c6e0f02325249a6987087cb36",
"assets/assets/fonts/fund/Fund-Light.ttf": "ca949725a9f715e603243fa5868b0077",
"assets/assets/fonts/fund/Fund-Regular.ttf": "5860baaf0ce1ca0536bb9b5f466ac085",
"assets/assets/translations/en.json": "7360d026b1edf394a1bac11562029982",
"assets/assets/translations/ar.json": "d30bd108dbdf7100f7817a26ecfc1d29",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
