const domain = "https://llamaway.com/account-fortnite";
const domainReferal =
  "https://llamaway.com/account-fortnite?utm_source=newsletter&utm_medium=email&utm_campaign=maggio2023";
const template = async (type, text) => {
  let template = {
    newsletter: `
    <!doctype html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Hello from Llamaway</title>
        <style>
        @font-face {
        font-family: 'FT_FONT';
        src: url(https://utils.llamaway.com/public/store/font/fortnite.woff) format('woff2');
        }


        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%; 
        }

        body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%; 
        }

        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%; }
            table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top; 
        }

        /* -------------------------------------
            BODY & CONTAINER
        ------------------------------------- */

        .body {
            background-color: #f6f6f6;
            width: 100%; 
        }

        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px; 
        }

        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px; 
        }

        /* -------------------------------------
            HEADER, FOOTER, MAIN
        ------------------------------------- */
        .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%; 
        }

        .wrapper {
            box-sizing: border-box;
            padding: 20px;
            /* background-color: #bb86fc; */
            border-radius: 3px;
            border: 10px dashed #5c16c5;
        }

        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
            background-color: white;
        }

        .bg-white{
            padding:5px;
            background-color: white;
        }

        .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%; 
        }
            .footer td,
            .footer p,
            .footer span,
            .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center; 
        }

        /* -------------------------------------
            TYPOGRAPHY
        ------------------------------------- */
        h1,
        h2,
        h3,
        h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px; 
        }

        h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize; 
        }

        p,
        ul,
        ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px; 
        }
            p li,
            ul li,
            ol li {
            list-style-position: inside;
            margin-left: 5px; 
        }

        a {
            text-decoration: underline; 
        }

        /* -------------------------------------
            BUTTONS
        ------------------------------------- */
        .btn {
            box-sizing: border-box;
            width: 100%; }
            .btn > tbody > tr > td {
            padding-bottom: 15px; }
            .btn table {
            width: auto; 
        }
            .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center; 
        }
            .btn a {
            font-family: 'FT_FONT';
            background-color: #ffffff;
            border-radius: 5px;
            box-sizing: border-box;
            color: #5c16c5;
            cursor: pointer;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize; 
        }

        .btn-primary table td {
            background-color: #5c16c5; 
        }

        .btn-primary a {
            background-color: rgb(92, 22, 197);
            border-color: #5c16c5;
            color: #ffffff; 
        }

        /* -------------------------------------
            OTHER STYLES THAT MIGHT BE USEFUL
        ------------------------------------- */
        .last {
            margin-bottom: 0; 
        }

        .first {
            margin-top: 0; 
        }

        .align-center {
            text-align: center; 
        }

        .align-right {
            text-align: right; 
        }

        .align-left {
            text-align: left; 
        }

        .clear {
            clear: both; 
        }

        .mt0 {
            margin-top: 0; 
        }

        .mb0 {
            margin-bottom: 0; 
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0; 
        }

        .powered-by a {
            text-decoration: none; 
        }

        hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0; 
        }

        /* -------------------------------------
            RESPONSIVE AND MOBILE FRIENDLY STYLES
        ------------------------------------- */
        @media only screen and (max-width: 620px) {
            table.body h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important; 
            }
            table.body p,
            table.body ul,
            table.body ol,
            table.body td,
            table.body span,
            table.body a {
            font-size: 16px !important; 
            }
            table.body .wrapper,
            table.body .article {
            padding: 10px !important; 
            }
            table.body .content {
            padding: 0 !important; 
            }
            table.body .container {
            padding: 0 !important;
            width: 100% !important; 
            }
            table.body .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important; 
            }
            table.body .btn table {
            width: 100% !important; 
            }
            table.body .btn a {
            width: 100% !important; 
            }
            table.body .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important; 
            }
        }

        /* -------------------------------------
            PRESERVE THESE STYLES IN THE HEAD
        ------------------------------------- */
        @media all {
            .ExternalClass {
            width: 100%; 
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
            line-height: 100%; 
            }
            .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important; 
            }
            #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
            }
            .btn-primary table td:hover {
            background-color: #410f8c !important; 
            }
            .btn-primary a:hover {
            background-color: #410f8c !important;
            border-color: #410f8c !important; 
            } 
        }

        </style>
    </head>
    <body>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
            <div class="content">

                <!-- START CENTERED WHITE CONTAINER -->
                <table role="presentation" class="main">

                <tr>
                    <td class="wrapper">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                        <td class="bg-white"><span>
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <img class="mama" alt="llamaway logo" src="https://utils.llamaway.com/public/store/logo.png">
                                <p style="margin: 0; margin-left: 10px; margin-top: 5px; font-family: 'FT_FONT';font-size: 18px; color: #410f8c;">LLAMAWAY</p>
                            </div>
                            <p align="center" style="font-family: 'FT_FONT'; font-size: 24px;">Landed Successfully.</p>
                            </span>
                            <p>Hi, Llamaway is finally here, if you are looking for fortnite accounts and looking for passionate people, maybe we know where to direct you!</p>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                            <tbody>
                                <tr>
                                <td align="center">
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                        <td> <a href="${domainReferal}" target="_blank">Discover Fortnite Accounts!</a> </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <p></p>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>

                <!-- END MAIN CONTENT AREA -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->

                <!-- START FOOTER -->
                <div class="footer">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                    <td class="content-block">
                        <!-- <span class="apple-link">Company Inc, 3 Abbey Road, San Francisco CA 94102</span> -->
                        <br>Need more Information <a href="#">llamawayinfo@gmail.com</a>.
                    </td>
                    </tr>
                    <tr>
                    <td class="content-block powered-by">
                        Made with ❤️ by <a href="https://llamaway.com">ITNLab</a>.
                    </td>
                    </tr>
                </table>
                </div>
                <!-- END FOOTER -->

            </div>
            </td>
            <td>&nbsp;</td>
        </tr>
        </table>
    </body>
    </html>
    `,
    welcome: `
    <!doctype html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Welcome in LLamaway</title>
        <style>
        @font-face {
        font-family: 'FT_FONT';
        src: url(https://utils.llamaway.com/public/store/font/fortnite.woff) format('woff2');
        }


        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%; 
        }

        body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%; 
        }

        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%; }
            table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top; 
        }

        /* -------------------------------------
            BODY & CONTAINER
        ------------------------------------- */

        .body {
            background-color: #f6f6f6;
            width: 100%; 
        }

        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px; 
        }

        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px; 
        }

        /* -------------------------------------
            HEADER, FOOTER, MAIN
        ------------------------------------- */
        .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%; 
        }

        .wrapper {
            box-sizing: border-box;
            padding: 20px;
            /* background-color: #bb86fc; */
            border-radius: 3px;
            border: 10px dashed #5c16c5;
        }

        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
            background-color: white;
        }

        .bg-white{
            padding:5px;
            background-color: white;
        }

        .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%; 
        }
            .footer td,
            .footer p,
            .footer span,
            .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center; 
        }

        /* -------------------------------------
            TYPOGRAPHY
        ------------------------------------- */
        h1,
        h2,
        h3,
        h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px; 
        }

        h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize; 
        }

        p,
        ul,
        ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px; 
        }
            p li,
            ul li,
            ol li {
            list-style-position: inside;
            margin-left: 5px; 
        }

        a {
            text-decoration: underline; 
        }

        /* -------------------------------------
            BUTTONS
        ------------------------------------- */
        .btn {
            box-sizing: border-box;
            width: 100%; }
            .btn > tbody > tr > td {
            padding-bottom: 15px; }
            .btn table {
            width: auto; 
        }
            .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center; 
        }
            .btn a {
            font-family: 'FT_FONT';
            background-color: #ffffff;
            border-radius: 5px;
            box-sizing: border-box;
            color: #5c16c5;
            cursor: pointer;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize; 
        }

        .btn-primary table td {
            background-color: #5c16c5; 
        }

        .btn-primary a {
            background-color: rgb(92, 22, 197);
            border-color: #5c16c5;
            color: #ffffff; 
        }

        /* -------------------------------------
            OTHER STYLES THAT MIGHT BE USEFUL
        ------------------------------------- */
        .last {
            margin-bottom: 0; 
        }

        .first {
            margin-top: 0; 
        }

        .align-center {
            text-align: center; 
        }

        .align-right {
            text-align: right; 
        }

        .align-left {
            text-align: left; 
        }

        .clear {
            clear: both; 
        }

        .mt0 {
            margin-top: 0; 
        }

        .mb0 {
            margin-bottom: 0; 
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0; 
        }

        .powered-by a {
            text-decoration: none; 
        }

        hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0; 
        }

        /* -------------------------------------
            RESPONSIVE AND MOBILE FRIENDLY STYLES
        ------------------------------------- */
        @media only screen and (max-width: 620px) {
            table.body h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important; 
            }
            table.body p,
            table.body ul,
            table.body ol,
            table.body td,
            table.body span,
            table.body a {
            font-size: 16px !important; 
            }
            table.body .wrapper,
            table.body .article {
            padding: 10px !important; 
            }
            table.body .content {
            padding: 0 !important; 
            }
            table.body .container {
            padding: 0 !important;
            width: 100% !important; 
            }
            table.body .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important; 
            }
            table.body .btn table {
            width: 100% !important; 
            }
            table.body .btn a {
            width: 100% !important; 
            }
            table.body .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important; 
            }
        }

        /* -------------------------------------
            PRESERVE THESE STYLES IN THE HEAD
        ------------------------------------- */
        @media all {
            .ExternalClass {
            width: 100%; 
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
            line-height: 100%; 
            }
            .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important; 
            }
            #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
            }
            .btn-primary table td:hover {
            background-color: #410f8c !important; 
            }
            .btn-primary a:hover {
            background-color: #410f8c !important;
            border-color: #410f8c !important; 
            } 
        }

        </style>
    </head>
    <body>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
            <div class="content">

                <!-- START CENTERED WHITE CONTAINER -->
                <table role="presentation" class="main">

                <tr>
                    <td class="wrapper">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                        <td class="bg-white"><span>
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <img class="mama" alt="llamaway logo" src="https://utils.llamaway.com/public/store/logo.png">
                                <p style="margin: 0; margin-left: 10px; margin-top: 5px; font-family: 'FT_FONT';font-size: 18px; color: #410f8c;">LLAMAWAY</p>
                            </div>
                            <p align="center" style="font-family: 'FT_FONT'; font-size: 24px;">Welcome!</p>
                            </span>
                            <p>Hello friend on Llamaway.com! A world of enthusiasts, from us I could find many deals and certainly all the support you need through our daily support, do not wait to contact us!.</p>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                            <tbody>
                                <tr>
                                <td align="center">
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                        <td> <a   href="${domain}" target="_blank">Discover other accounts!</a> </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <p></p>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>

                <!-- END MAIN CONTENT AREA -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->

                <!-- START FOOTER -->
                <div class="footer">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                    <td class="content-block">
                        <!-- <span class="apple-link">Company Inc, 3 Abbey Road, San Francisco CA 94102</span> -->
                        <br>Need more Information <a href="#">llamawayinfo@gmail.com</a>.
                    </td>
                    </tr>
                    <tr>
                    <td class="content-block powered-by">
                        Made with ❤️ by <a href="https://llamaway.com">ITNLab</a>.
                    </td>
                    </tr>
                </table>
                </div>
                <!-- END FOOTER -->

            </div>
            </td>
            <td>&nbsp;</td>
        </tr>
        </table>
    </body>
    </html>
    `,
    reset: `
    <!doctype html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Reset Password</title>
        <style>
        @font-face {
        font-family: 'FT_FONT';
        src: url(https://utils.llamaway.com/public/store/font/fortnite.woff) format('woff2');
        }


        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%; 
        }

        body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%; 
        }

        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%; }
            table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top; 
        }

        /* -------------------------------------
            BODY & CONTAINER
        ------------------------------------- */

        .body {
            background-color: #f6f6f6;
            width: 100%; 
        }

        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px; 
        }

        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px; 
        }

        /* -------------------------------------
            HEADER, FOOTER, MAIN
        ------------------------------------- */
        .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%; 
        }

        .wrapper {
            box-sizing: border-box;
            padding: 20px;
            /* background-color: #bb86fc; */
            border-radius: 3px;
            border: 10px dashed #5c16c5;
        }

        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
            background-color: white;
        }

        .bg-white{
            padding:5px;
            background-color: white;
        }

        .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%; 
        }
            .footer td,
            .footer p,
            .footer span,
            .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center; 
        }

        /* -------------------------------------
            TYPOGRAPHY
        ------------------------------------- */
        h1,
        h2,
        h3,
        h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px; 
        }

        h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize; 
        }

        p,
        ul,
        ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px; 
        }
            p li,
            ul li,
            ol li {
            list-style-position: inside;
            margin-left: 5px; 
        }

        a {
            text-decoration: underline; 
        }

        /* -------------------------------------
            BUTTONS
        ------------------------------------- */
        .btn {
            box-sizing: border-box;
            width: 100%; }
            .btn > tbody > tr > td {
            padding-bottom: 15px; }
            .btn table {
            width: auto; 
        }
            .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center; 
        }
            .btn a {
            font-family: 'FT_FONT';
            background-color: #ffffff;
            border-radius: 5px;
            box-sizing: border-box;
            color: #5c16c5;
            cursor: pointer;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize; 
        }

        .btn-primary table td {
            background-color: #5c16c5; 
        }

        .btn-primary a {
            background-color: rgb(92, 22, 197);
            border-color: #5c16c5;
            color: #ffffff; 
        }

        /* -------------------------------------
            OTHER STYLES THAT MIGHT BE USEFUL
        ------------------------------------- */
        .last {
            margin-bottom: 0; 
        }

        .first {
            margin-top: 0; 
        }

        .align-center {
            text-align: center; 
        }

        .align-right {
            text-align: right; 
        }

        .align-left {
            text-align: left; 
        }

        .clear {
            clear: both; 
        }

        .mt0 {
            margin-top: 0; 
        }

        .mb0 {
            margin-bottom: 0; 
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0; 
        }

        .powered-by a {
            text-decoration: none; 
        }

        hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0; 
        }

        /* -------------------------------------
            RESPONSIVE AND MOBILE FRIENDLY STYLES
        ------------------------------------- */
        @media only screen and (max-width: 620px) {
            table.body h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important; 
            }
            table.body p,
            table.body ul,
            table.body ol,
            table.body td,
            table.body span,
            table.body a {
            font-size: 16px !important; 
            }
            table.body .wrapper,
            table.body .article {
            padding: 10px !important; 
            }
            table.body .content {
            padding: 0 !important; 
            }
            table.body .container {
            padding: 0 !important;
            width: 100% !important; 
            }
            table.body .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important; 
            }
            table.body .btn table {
            width: 100% !important; 
            }
            table.body .btn a {
            width: 100% !important; 
            }
            table.body .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important; 
            }
        }

        /* -------------------------------------
            PRESERVE THESE STYLES IN THE HEAD
        ------------------------------------- */
        @media all {
            .ExternalClass {
            width: 100%; 
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
            line-height: 100%; 
            }
            .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important; 
            }
            #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
            }
            .btn-primary table td:hover {
            background-color: #410f8c !important; 
            }
            .btn-primary a:hover {
            background-color: #410f8c !important;
            border-color: #410f8c !important; 
            } 
        }

        </style>
    </head>
    <body>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
            <div class="content">

                <!-- START CENTERED WHITE CONTAINER -->
                <table role="presentation" class="main">

                <tr>
                    <td class="wrapper">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                        <td class="bg-white"><span>
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <img class="mama" alt="llamaway logo" src="https://utils.llamaway.com/public/store/logo.png">
                                <p style="margin: 0; margin-left: 10px; margin-top: 5px; font-family: 'FT_FONT';font-size: 18px; color: #410f8c;">LLAMAWAY</p>
                            </div>
                            <p align="center" style="font-family: 'FT_FONT'; font-size: 24px;">Reset Password.</p>
                            </span>
                            <p>Your password has been successfully reset, please choose to click and update your password.</p>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                            <tbody>
                                <tr>
                                <td align="center">
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                        <td> <a   href="https://llamaway.com/login?recovery=${text}" target="_blank">Change Password</a> </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <p></p>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>

                <!-- END MAIN CONTENT AREA -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->

                <!-- START FOOTER -->
                <div class="footer">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                    <td class="content-block">
                        <!-- <span class="apple-link">Company Inc, 3 Abbey Road, San Francisco CA 94102</span> -->
                        <br>Need more Information <a href="#">llamawayinfo@gmail.com</a>.
                    </td>
                    </tr>
                    <tr>
                    <td class="content-block powered-by">
                        Made with ❤️ by <a href="https://llamaway.com">ITNLab</a>.
                    </td>
                    </tr>
                </table>
                </div>
                <!-- END FOOTER -->

            </div>
            </td>
            <td>&nbsp;</td>
        </tr>
        </table>
    </body>
    </html>
    `,
    reply: `
    <!doctype html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Welcome in LLamaway</title>
        <style>
        @font-face {
        font-family: 'FT_FONT';
        src: url(https://utils.llamaway.com/public/store/font/fortnite.woff) format('woff2');
        }


        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%; 
        }

        body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%; 
        }

        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%; }
            table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top; 
        }

        /* -------------------------------------
            BODY & CONTAINER
        ------------------------------------- */

        .body {
            background-color: #f6f6f6;
            width: 100%; 
        }

        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px; 
        }

        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px; 
        }

        /* -------------------------------------
            HEADER, FOOTER, MAIN
        ------------------------------------- */
        .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%; 
        }

        .wrapper {
            box-sizing: border-box;
            padding: 20px;
            /* background-color: #bb86fc; */
            border-radius: 3px;
            border: 10px dashed #5c16c5;
        }

        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
            background-color: white;
        }

        .bg-white{
            padding:5px;
            background-color: white;
        }

        .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%; 
        }
            .footer td,
            .footer p,
            .footer span,
            .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center; 
        }

        /* -------------------------------------
            TYPOGRAPHY
        ------------------------------------- */
        h1,
        h2,
        h3,
        h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px; 
        }

        h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize; 
        }

        p,
        ul,
        ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px; 
        }
            p li,
            ul li,
            ol li {
            list-style-position: inside;
            margin-left: 5px; 
        }

        a {
            text-decoration: underline; 
        }

        /* -------------------------------------
            BUTTONS
        ------------------------------------- */
        .btn {
            box-sizing: border-box;
            width: 100%; }
            .btn > tbody > tr > td {
            padding-bottom: 15px; }
            .btn table {
            width: auto; 
        }
            .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center; 
        }
            .btn a {
            font-family: 'FT_FONT';
            background-color: #ffffff;
            border-radius: 5px;
            box-sizing: border-box;
            color: #5c16c5;
            cursor: pointer;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize; 
        }

        .btn-primary table td {
            background-color: #5c16c5; 
        }

        .btn-primary a {
            background-color: rgb(92, 22, 197);
            border-color: #5c16c5;
            color: #ffffff; 
        }

        /* -------------------------------------
            OTHER STYLES THAT MIGHT BE USEFUL
        ------------------------------------- */
        .last {
            margin-bottom: 0; 
        }

        .first {
            margin-top: 0; 
        }

        .align-center {
            text-align: center; 
        }

        .align-right {
            text-align: right; 
        }

        .align-left {
            text-align: left; 
        }

        .clear {
            clear: both; 
        }

        .mt0 {
            margin-top: 0; 
        }

        .mb0 {
            margin-bottom: 0; 
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0; 
        }

        .powered-by a {
            text-decoration: none; 
        }

        hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0; 
        }

        /* -------------------------------------
            RESPONSIVE AND MOBILE FRIENDLY STYLES
        ------------------------------------- */
        @media only screen and (max-width: 620px) {
            table.body h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important; 
            }
            table.body p,
            table.body ul,
            table.body ol,
            table.body td,
            table.body span,
            table.body a {
            font-size: 16px !important; 
            }
            table.body .wrapper,
            table.body .article {
            padding: 10px !important; 
            }
            table.body .content {
            padding: 0 !important; 
            }
            table.body .container {
            padding: 0 !important;
            width: 100% !important; 
            }
            table.body .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important; 
            }
            table.body .btn table {
            width: 100% !important; 
            }
            table.body .btn a {
            width: 100% !important; 
            }
            table.body .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important; 
            }
        }

        /* -------------------------------------
            PRESERVE THESE STYLES IN THE HEAD
        ------------------------------------- */
        @media all {
            .ExternalClass {
            width: 100%; 
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
            line-height: 100%; 
            }
            .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important; 
            }
            #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
            }
            .btn-primary table td:hover {
            background-color: #410f8c !important; 
            }
            .btn-primary a:hover {
            background-color: #410f8c !important;
            border-color: #410f8c !important; 
            } 
        }

        </style>
    </head>
    <body>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
            <div class="content">

                <!-- START CENTERED WHITE CONTAINER -->
                <table role="presentation" class="main">

                <tr>
                    <td class="wrapper">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                        <td class="bg-white"><span>
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <img class="mama" alt="llamaway logo" src="https://utils.llamaway.com/public/store/logo.png">
                                <p style="margin: 0; margin-left: 10px; margin-top: 5px; font-family: 'FT_FONT';font-size: 18px; color: #410f8c;">LLAMAWAY</p>
                            </div>
                            <p align="center" style="font-family: 'FT_FONT'; font-size: 24px;">Information!</p>
                            </span>
                            <p>${text}</p>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                            <tbody>
                                <tr>
                                <td align="center">
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                        <td> <a   href="https://llamaway.com/account-fortnite" target="_blank">Discover other accounts!</a> </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <p></p>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>

                <!-- END MAIN CONTENT AREA -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->

                <!-- START FOOTER -->
                <div class="footer">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                    <td class="content-block">
                        <!-- <span class="apple-link">Company Inc, 3 Abbey Road, San Francisco CA 94102</span> -->
                        <br>Need more Information <a href="#">llamawayinfo@gmail.com</a>.
                    </td>
                    </tr>
                    <tr>
                    <td class="content-block powered-by">
                        Made with ❤️ by <a href="https://llamaway.com">ITNLab</a>.
                    </td>
                    </tr>
                </table>
                </div>
                <!-- END FOOTER -->

            </div>
            </td>
            <td>&nbsp;</td>
        </tr>
        </table>
    </body>
    </html>
    `,
    information: `
    <!doctype html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Welcome in LLamaway</title>
        <style>
        @font-face {
        font-family: 'FT_FONT';
        src: url(https://utils.llamaway.com/public/store/font/fortnite.woff) format('woff2');
        }


        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%; 
        }

        body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%; 
        }

        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%; }
            table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top; 
        }

        /* -------------------------------------
            BODY & CONTAINER
        ------------------------------------- */

        .body {
            background-color: #f6f6f6;
            width: 100%; 
        }

        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px; 
        }

        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px; 
        }

        /* -------------------------------------
            HEADER, FOOTER, MAIN
        ------------------------------------- */
        .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%; 
        }

        .wrapper {
            box-sizing: border-box;
            padding: 20px;
            /* background-color: #bb86fc; */
            border-radius: 3px;
            border: 10px dashed #5c16c5;
        }

        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
            background-color: white;
        }

        .bg-white{
            padding:5px;
            background-color: white;
        }

        .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%; 
        }
            .footer td,
            .footer p,
            .footer span,
            .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center; 
        }

        /* -------------------------------------
            TYPOGRAPHY
        ------------------------------------- */
        h1,
        h2,
        h3,
        h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px; 
        }

        h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize; 
        }

        p,
        ul,
        ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px; 
        }
            p li,
            ul li,
            ol li {
            list-style-position: inside;
            margin-left: 5px; 
        }

        a {
            text-decoration: underline; 
        }

        /* -------------------------------------
            BUTTONS
        ------------------------------------- */
        .btn {
            box-sizing: border-box;
            width: 100%; }
            .btn > tbody > tr > td {
            padding-bottom: 15px; }
            .btn table {
            width: auto; 
        }
            .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center; 
        }
            .btn a {
            font-family: 'FT_FONT';
            background-color: #ffffff;
            border-radius: 5px;
            box-sizing: border-box;
            color: #5c16c5;
            cursor: pointer;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize; 
        }

        .btn-primary table td {
            background-color: #5c16c5; 
        }

        .btn-primary a {
            background-color: rgb(92, 22, 197);
            border-color: #5c16c5;
            color: #ffffff; 
        }

        /* -------------------------------------
            OTHER STYLES THAT MIGHT BE USEFUL
        ------------------------------------- */
        .last {
            margin-bottom: 0; 
        }

        .first {
            margin-top: 0; 
        }

        .align-center {
            text-align: center; 
        }

        .align-right {
            text-align: right; 
        }

        .align-left {
            text-align: left; 
        }

        .clear {
            clear: both; 
        }

        .mt0 {
            margin-top: 0; 
        }

        .mb0 {
            margin-bottom: 0; 
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0; 
        }

        .powered-by a {
            text-decoration: none; 
        }

        hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0; 
        }

        /* -------------------------------------
            RESPONSIVE AND MOBILE FRIENDLY STYLES
        ------------------------------------- */
        @media only screen and (max-width: 620px) {
            table.body h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important; 
            }
            table.body p,
            table.body ul,
            table.body ol,
            table.body td,
            table.body span,
            table.body a {
            font-size: 16px !important; 
            }
            table.body .wrapper,
            table.body .article {
            padding: 10px !important; 
            }
            table.body .content {
            padding: 0 !important; 
            }
            table.body .container {
            padding: 0 !important;
            width: 100% !important; 
            }
            table.body .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important; 
            }
            table.body .btn table {
            width: 100% !important; 
            }
            table.body .btn a {
            width: 100% !important; 
            }
            table.body .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important; 
            }
        }

        /* -------------------------------------
            PRESERVE THESE STYLES IN THE HEAD
        ------------------------------------- */
        @media all {
            .ExternalClass {
            width: 100%; 
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
            line-height: 100%; 
            }
            .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important; 
            }
            #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
            }
            .btn-primary table td:hover {
            background-color: #410f8c !important; 
            }
            .btn-primary a:hover {
            background-color: #410f8c !important;
            border-color: #410f8c !important; 
            } 
        }

        </style>
    </head>
    <body>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
            <div class="content">

                <!-- START CENTERED WHITE CONTAINER -->
                <table role="presentation" class="main">

                <tr>
                    <td class="wrapper">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                        <td class="bg-white"><span>
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <img class="mama" alt="llamaway logo" src="https://utils.llamaway.com/public/store/logo.png">
                                <p style="margin: 0; margin-left: 10px; margin-top: 5px; font-family: 'FT_FONT';font-size: 18px; color: #410f8c;">LLAMAWAY</p>
                            </div>
                            <p align="center" style="font-family: 'FT_FONT'; font-size: 24px;">Information!</p>
                            </span>
                            <p>${text}</p>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                            <tbody>
                                <tr>
                                <td align="center">
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                        <td> <a   href="https://llamaway.com/account-fortnite" target="_blank">Discover other accounts!</a> </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <p></p>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>

                <!-- END MAIN CONTENT AREA -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->

                <!-- START FOOTER -->
                <div class="footer">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                    <td class="content-block">
                        <!-- <span class="apple-link">Company Inc, 3 Abbey Road, San Francisco CA 94102</span> -->
                        <br>Need more Information <a href="#">llamawayinfo@gmail.com</a>.
                    </td>
                    </tr>
                    <tr>
                    <td class="content-block powered-by">
                        Made with ❤️ by <a href="https://llamaway.com">ITNLab</a>.
                    </td>
                    </tr>
                </table>
                </div>
                <!-- END FOOTER -->

            </div>
            </td>
            <td>&nbsp;</td>
        </tr>
        </table>
    </body>
    </html>
    `,
    purchase: `
    <!doctype html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Purchase Report</title>
        <style>
        @font-face {
        font-family: 'FT_FONT';
        src: url(https://utils.llamaway.com/public/store/font/fortnite.woff) format('woff2');
        }


        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%; 
        }

        body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%; 
        }

        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%; }
            table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top; 
        }

        /* -------------------------------------
            BODY & CONTAINER
        ------------------------------------- */

        .body {
            background-color: #f6f6f6;
            width: 100%; 
        }

        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px; 
        }

        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px; 
        }

        /* -------------------------------------
            HEADER, FOOTER, MAIN
        ------------------------------------- */
        .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%; 
        }

        .wrapper {
            box-sizing: border-box;
            padding: 20px;
            /* background-color: #bb86fc; */
            border-radius: 3px;
            border: 10px dashed #5c16c5;
        }

        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
            background-color: white;
        }

        .bg-white{
            padding:5px;
            background-color: white;
        }

        .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%; 
        }
            .footer td,
            .footer p,
            .footer span,
            .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center; 
        }

        /* -------------------------------------
            TYPOGRAPHY
        ------------------------------------- */
        h1,
        h2,
        h3,
        h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px; 
        }

        h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize; 
        }

        p,
        ul,
        ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px; 
        }
            p li,
            ul li,
            ol li {
            list-style-position: inside;
            margin-left: 5px; 
        }

        a {
            text-decoration: underline; 
        }

        /* -------------------------------------
            BUTTONS
        ------------------------------------- */
        .btn {
            box-sizing: border-box;
            width: 100%; }
            .btn > tbody > tr > td {
            padding-bottom: 15px; }
            .btn table {
            width: auto; 
        }
            .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center; 
        }
            .btn a {
            font-family: 'FT_FONT';
            background-color: #ffffff;
            border-radius: 5px;
            box-sizing: border-box;
            color: #5c16c5;
            cursor: pointer;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize; 
        }

        .btn-primary table td {
            background-color: #5c16c5; 
        }

        .btn-primary a {
            background-color: rgb(92, 22, 197);
            border-color: #5c16c5;
            color: #ffffff; 
        }

        /* -------------------------------------
            OTHER STYLES THAT MIGHT BE USEFUL
        ------------------------------------- */
        .last {
            margin-bottom: 0; 
        }

        .first {
            margin-top: 0; 
        }

        .align-center {
            text-align: center; 
        }

        .align-right {
            text-align: right; 
        }

        .align-left {
            text-align: left; 
        }

        .clear {
            clear: both; 
        }

        .mt0 {
            margin-top: 0; 
        }

        .mb0 {
            margin-bottom: 0; 
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0; 
        }

        .powered-by a {
            text-decoration: none; 
        }

        hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0; 
        }

        /* -------------------------------------
            RESPONSIVE AND MOBILE FRIENDLY STYLES
        ------------------------------------- */
        @media only screen and (max-width: 620px) {
            table.body h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important; 
            }
            table.body p,
            table.body ul,
            table.body ol,
            table.body td,
            table.body span,
            table.body a {
            font-size: 16px !important; 
            }
            table.body .wrapper,
            table.body .article {
            padding: 10px !important; 
            }
            table.body .content {
            padding: 0 !important; 
            }
            table.body .container {
            padding: 0 !important;
            width: 100% !important; 
            }
            table.body .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important; 
            }
            table.body .btn table {
            width: 100% !important; 
            }
            table.body .btn a {
            width: 100% !important; 
            }
            table.body .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important; 
            }
        }

        /* -------------------------------------
            PRESERVE THESE STYLES IN THE HEAD
        ------------------------------------- */
        @media all {
            .ExternalClass {
            width: 100%; 
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
            line-height: 100%; 
            }
            .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important; 
            }
            #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
            }
            .btn-primary table td:hover {
            background-color: #410f8c !important; 
            }
            .btn-primary a:hover {
            background-color: #410f8c !important;
            border-color: #410f8c !important; 
            } 
        }

        </style>
    </head>
    <body>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
            <div class="content">

                <!-- START CENTERED WHITE CONTAINER -->
                <table role="presentation" class="main">

                <tr>
                    <td class="wrapper">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                        <td class="bg-white"><span>
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <img class="mama" alt="llamaway logo" src="https://utils.llamaway.com/public/store/logo.png">
                                <p style="margin: 0; margin-left: 10px; margin-top: 5px; font-family: 'FT_FONT';font-size: 18px; color: #410f8c;">LLAMAWAY</p>
                            </div>
                            <p align="center" style="font-family: 'FT_FONT'; font-size: 24px;">Purchase Report.</p>
                            </span>
                            <p>we thank you for your trust and for making llamaway possible to continue, we remind you to contact us for any problem or question, your purchases are:</p>
                            ${text}
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                            <tbody>
                                <tr>
                                <td align="center">
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                        <td> <a   href="https://llamaway.com/account-fortnite" target="_blank">Discover more accounts!</a> </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <p></p>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>

                <!-- END MAIN CONTENT AREA -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->

                <!-- START FOOTER -->
                <div class="footer">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                    <td class="content-block">
                        <!-- <span class="apple-link">Company Inc, 3 Abbey Road, San Francisco CA 94102</span> -->
                        <br>Need more Information <a href="#">llamawayinfo@gmail.com</a>.
                    </td>
                    </tr>
                    <tr>
                    <td class="content-block powered-by">
                        Made with ❤️ by <a href="https://llamaway.com">ITNLab</a>.
                    </td>
                    </tr>
                </table>
                </div>
                <!-- END FOOTER -->

            </div>
            </td>
            <td>&nbsp;</td>
        </tr>
        </table>
    </body>
    </html>
    `,
  };
  return template[type];
};

module.exports = { template };
