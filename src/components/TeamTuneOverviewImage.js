import * as React from "react"

function TeamTuneOverviewImage(props) {
  return (
    <svg
      width={1280}
      height={720}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      overflow="hidden"
      {...props}
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h1280v720H0z" />
        </clipPath>
        <clipPath id="prefix__b">
          <path d="M0 0h3209920v971550H0z" />
        </clipPath>
        <clipPath id="prefix__c">
          <path d="M0 0h3209920v966779H0z" />
        </clipPath>
        <clipPath id="prefix__e">
          <path d="M1012 170h96v96h-96z" />
        </clipPath>
        <clipPath id="prefix__f">
          <path d="M1012 170h96v96h-96z" />
        </clipPath>
        <clipPath id="prefix__g">
          <path d="M1012 170h96v96h-96z" />
        </clipPath>
        <clipPath id="prefix__h">
          <path d="M1089 155h96v96h-96z" />
        </clipPath>
        <clipPath id="prefix__i">
          <path d="M1089 155h96v96h-96z" />
        </clipPath>
        <clipPath id="prefix__j">
          <path d="M1089 155h96v96h-96z" />
        </clipPath>
        <clipPath id="prefix__k">
          <path d="M1089 204h96v96h-96z" />
        </clipPath>
        <clipPath id="prefix__l">
          <path d="M1089 204h96v96h-96z" />
        </clipPath>
        <clipPath id="prefix__m">
          <path d="M1089 204h96v96h-96z" />
        </clipPath>
        <clipPath id="prefix__n">
          <path d="M0 0h1162050v1352550H0z" />
        </clipPath>
        <clipPath id="prefix__o">
          <path d="M0 0h1158170v1352550H0z" />
        </clipPath>
        <clipPath id="prefix__q">
          <path d="M666 480h119v119H666z" />
        </clipPath>
        <clipPath id="prefix__r">
          <path d="M666 480h119v119H666z" />
        </clipPath>
        <clipPath id="prefix__s">
          <path d="M666 480h119v119H666z" />
        </clipPath>
        <image
          width={591}
          height={178}
          xlinkHref="data:image/png;base64,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"
          preserveAspectRatio="none"
          id="prefix__d"
        />
        <image
          width={143}
          height={167}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACnCAYAAAAonA/IAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABXESURBVHhe7Z0JmFxVlcfTWbo7nV7TWci+p4MsAsLATFgGIqIkLCKLKEggMDAsYVFEBGUXB5DEBBgQBRxxhhl1GHCBEUYYEGYYZUYQEJDNLSyxE6CbsCSh/P/KVL7Hm9P1XlW99/rd7vv/vt/3Ebpevbq3Tt1377nnnDvEy2uThovpYldxsDhZXCRuFPdsYqXYTngNEpWMYr74mDhJXCgwirvEL8VqUYjJenGq8HJYYaM4UWAUN4gfi0qNolK4r1fOhFFME3w5BwmM4gLxDZGFUcTlVuGVoTCKvxD7i+PEuQKj+JF4VOTBKOLCZ/VKQCWj2E9gFOeIr4sfiv8VLwrrC3AdrzIKGsWxImwUq4TVqYMBJs6DUhjFTmKRWCI+L64XPxAPi8FsFHH5uRhQmiSCRnG28EYRg7r6EauHTe58tmm3LZ9t+fAOv7deE+Iq4ZxYjSwUl4h/EPeKZ4XVwEHP0ObG7uEzxj7fNH/L51oP3mVV+5K9esd84dCXJ19/4tPTf3LR03MeXf7C3GevWzPv+esKJabddd5b1nuFOFI4pXHip8JqzKBiWEdT94h5k383avetXmg7dP7Lo4/bZ/3Y8w9/ZdJNpz43854Ln5r92MpVXc/8/ZtBo4jL+C8eZt4zxAzhlAa84Qwb176mfpvpq5r33uYPrYfMf7nzhH0K4y49cvWUb3/6t7Puv/j52Y+tWGV94UnSvN9OvdZnC/CycEofElZDck/dsKGF4RPbX2/YaeYrzfts91L7x3ddO/r4fQpbXHH02mnf++zvZz1wyW/mPrHi5XnP2V9m1gwf12a2I8B3hVO6TFgN6TeGNjUUjaJx59mrRy3c4Y9tn9qjd8zShYXxly9eO+XWs16c9eClL8598uq1RaPIiWFEMftnl62z2hridOGU7hNWQxJnaMvIwojpY3oxiuYDd361Y/GCd8acvn9hwrKjX516++dfmvnwZau7nrpmnUtGEZeJy5eYfRKCFa0zYoUV5xdRlmGdLYWGuZPeGDl/3trmA2QUR++1cdznDipMvObYnqm3n/PKrIev7J7zzNVvz3vu2gFnFHFpO3LPN62+C8B8aIRwRh8QVkM207D1tHUjd3/fqy0f2/n10cfuXRh/3mGFSdef2DvtjnNXYxR/NojBaxRxadhq6karfwP8p3BKS4XVkCLDx7d7o0iAOU+ufNvq3xD415zSPwqrIUWaD9jxdaszPJUx+ebT4hjPvsIp/VZYDSky7txDzM7wVEbnKfu+Y/VviNHCGU0VViM2M/3HF/RYneGpjKb5XVEjDzFHTulQYTWkyNCR9YWuZ67ZYHWGJz5dz1y7sa6x3uzjAF8TTmmFsBpSpGn+vF6rMzyVMf3Oc9+w+jfEp4RTIpTCakiRMactesfqDE9ljD8/1mboLOGMmkTZSdykm0552+oMT2U077vD61b/BnhFOKW9hNWQImw4dv3qqreszvBUBr4yq48D/KtwSl8QVkOKNMyd6B9ZCTDrob+LCsGATwunRKC51ZAi7ccsqCrYyfNeJlx5jNm/IUgEcEqvCashRSauWLLe6gxPZbQdsUfUSou/O7UZuo2wGrKZWQ9f4Z2DCdAwZ0KUZ/l+4ZT+VlgNKTJ8QsdGqyM8lTHnqavi7Gd9STilbwqrIUWaF33Ab4YmwKSblsbJlCCVySk9I6yGFBl/weFmZ3gqo3PpwjiboWOEMxorrEZsZvrdF7xmdYYnHnOfWPHmzIcu62ncflbUZJmqHE7po8JqSJGhoxp98FcfzH58Re+Mn36pZ/ptZ785+RsnFba49IjCmDMPfK39iD3WNH1w29c0OS5uJtcNH4aT9d0hdXYfByDj1ildLqyGFGnabctBtxk6+5FlPTPuu6RnynfOfGfStSfIKI4sdJ6yqLvt8F27m3bdcl39zPGFuhEyiOHD3i0axdC6wpA6YfRfhRwlnNJ/C6shRcacvmhAhGB0/frqDbN/ubx3+l0X9Ey5+dSNE1ceV9ji4k9u6Fy6qLv5wJ3WjNx+xjsjJo6WUQxPwyjiMls4o5Gi7CRu8i1n5NqzzPJ31s+v6Jlx1/lvTL7h5MLEry4pjD3vsLdGn/iR7lGLduhu3GpKMbGuZBRDNhuF3d5+xLkCTlTjtBpShM3QuU/0z2bo3MdXrpv54KW9M+784rrJN55SmHDF4kLn2Qf1dBy9YE3zwh3XNnRNLAxrbXrv44NRIn9GERfnSsd9TlgNKdK49dTEN0PnPL78jZkPXNI79baz3maSOeGyo5hkru04as81TQu27WnomlSoq9coMUIGERwpjM83wPiMcEr/JqyGFGlbvOcblgGE6Xr22o2zH13eM+PeC3un3vKZDUwyJ1x+VKHzjP262w6b3920S9db9dPGho0i6/lE3tlFOCWCjqyGFNli2TFvzXpkWe/0uy/smfKt0wqTrjm+MP7iT5AOvKZ5vx27G98/Y8OIyZ2FuoaSUTBKeKOoAjJ064UzmieshmymaBCbjYL5hDeKCHoEqUu/EHeKfxbEhZf9kQrK2TglSsFZDfH8f9YItnCI8cYobhZUEjlFHCLeL8ixahCMIOT7DxV1ghXtu8J63xJfFk6J1A6rIYOJl8RTAl8X9ZkpnUcRb6IM2KDEKPjyw0ZRiRYI695BqADrlH4lrIa4zgaBUTwmKBVzm8AoCLNdLPgy54pajSKuzhPW5wzC/qIz6hRRQ2neoBzJH8Qj4j8EfhFGT4ziMPFXYqYoGQXReMNEWkYRVxxDYLWnxOPCKZFAbzWkPyD89QVBei0nw/yL+KrA74FREM87QYSNgvlE3sXnXCusdpfgSAOndKmwGpIkfxSU3aUANUbxbcHE8DTByTHbizbholHEFXMmq2+CHC2cEkWDrIbEgeqcT4r/EkwyMYqLxfGCEY146FEibBSDUZyiY/VhEOZfzogJYlTuEM9hJpnnC3Km9xTs+JaMIu1J5kBR2VpHols4NdLuLKyGBHFuKM2pfiOs/i3BStApUZrVakiQLuFVmziwxerbIJ8VTgmXudWQEs4NpTnV4cLq3yB/KZwSDjSrISWcG0pzKtwNVv+WwG/FgsIZcQCG1ZAgZwmv2sUBc1b/lnhQOCVWTlZDguCp9apNrEqjaiyzseqUrhFWQ0oQz+zUUJpTxTn45QDhlIgzsRpSAsefV+3CP2b1b5DxwhlRNi5qM3SZ8KpdbNxa/VuCiAan9GFhNSQIB9N71Sa2Y6JqDt4onFKcoXQL4VWbthNW3wYhitMpRQ2lTwuv2kVoqtW/QYgfd0ZxhlI2Qr1q1z8Jq39LEA/tlAc/zlBK3K5X7Yo6J/37wimdIKyGBMHAvGrTdBG1oiVL1ylFDaWEgvrYnNrF4flW/waZL5zS88JqSIl/F161K44Hv1E4oykiaig9R3jVrv8TVv+WeEg4JTIQrIYE+aDwqk2tImozdLlwSmw5WA0psV7Q8CRFnPMcwQ49QfFB9hacoDxZDKR5VpzN0IOFU/qZsBpSgiS6JDRJkFLzPUGVK5L+rapjPEKpR8wkHcckxk1EHWEMLovi2+G2hpkonBEjAOm3VkNKXCVqEak2rOZeFdVmoWJkBItz2otTdYgD+omw2laCQglOaQ9hNSTIJ0Q1IrX3O4LaMtb7VgPGR14YiYEujUSkIRFWarWphHMefFZRVkOCsBqrRHQUTseo7Y5aYOLJ45SMSxdESrTVjiDOefDLnqElficq2WchPZjRJmpVkRRUTCeHLO8T66XC+vxBeLw7IzqciavVkBIUFYircaLsAbYpwXzoEpFnA+IHZX32EswHnVpZbiWshgQ5Q8QR9WOiHGBpwqQ/zwZE6Rfrc5egzIpTOk5YDQmyk4hSi6BmnnV9lmBAeSw3iz/L+rxBnPPgM7u3GlKC1QGT33Lil/51YV3fH/AI4xTmPClOOlPePnOkyp6hJYgsjBJbG1F+oqxhkt8h8qKo2o548Ek+6FcxSlAhi6zPEn1tKzC5jXLYMYcoJ947qgRsf1GrYzOO2P1uF5STKSdqH1qfsQQe/n5Rs2DI4xwmqmxRbYuZe4kXBZW3SBHeWpQmlFTXtBoSJOo4wiyqh1ULjy/am6TYOqDf6Gt8TEQEktfPSMe/+f/8nT25knBdRLktqMOcqbD6jwsePQx71ocKg0/kBwJ/Aqms1mtK0OByFTj5W5pOwCSgcFISIvqP3W5+mFGjNX+nigipM3jY2ei1XhfkUJGZsOx7RbVzDTYkCbK2/lbiCVFOZQ80yQmMPsFRoFLxODpJRBWc7AtG/rJnlW2ils9YkXYQUSVQkoAVVF/i0fdrYV2XN6qNB2Y6cJNIezHwnMhE7xMMndaHSBqWl30JA7auySN4vCsVI07Z034ShGMGUhc7yJxsa32ANChXNo6wCOuaPBI1d7PEQqDa0JFKOVmkrixXNiy/y7n5qQxmXZdXKilVwsmGbwvrfdIg9agAQiLinPSfFKzIyolq7NZ1eYWzHeKIH8z9wnqPNCBSMvX60xTAtm6eFuXKxuGIzCrcIiniVpzYXWT1uIK7Rari1xCVU5U0dGJfmiqsa/JM3C8p6z06DlRJVZGn7SUMvhGKHvQlHGbWdXkGn1gcZeECCUKWSKrC+2jdOC2iysYNVONhXmldmxb4j1KPwaYCuHXztLhSlJOLxkPWQpTKnh+fApTRTV1xqnUlCedhlhOPNOu6PPMtEaW/Fta1aXG1SF1nC+vmaRGnbFzWc4NauUhEKWvjYVM7dX1SWDdPg7j7LFHl5/IGZU2iFOfQtCTh0JLUta2wbp4GbATGEUFi1vV5Jc5hZ0xeWWla1ycNTtZMhAcyq2i9Y0UcUTHDuj6PECAXN++MoDnrPZImk83Qkq4V1odIEoLd4+aA42XOa/hpmK+IuMpqfrm/yEyEQKQdV1LpCbpRx/3kAbYaKtl4JP477U3RVSIq5jlxfVdYHyYJKERQ6SGovD5vWRNh4vh3wkr7R0EN5sxFqGJUanC1VLvHcouw3i8PMOpUkwvVKdJyRRCYlvmoUxJxKUmWK4HbRbUNYvRJ+vMkBQUcysUkldM+Iul2Ec/c70dc4/dJqmH3CfKOalHWHvA4EOA/S9SiJPsZw8EJmQtxOk0tQyupOiwXazUcRAoQRmjdpz/gccVB90noo6LWmHFyutg3y5VIQKNUW6W5U3iRSREuF3ZRqfgsJBda98uaG0SS0XmzBRUsKl2F4fqg9iJ9k0vxTCcrcqUg+Y/hOtwIVkT8enCA4aZPq54f7gTCKsP3zxLCZ9PI+eZYzAXiDoF/q69oQ/4/f+d1VBdJPcQ0KZFnRMYDz1bSZkpQkpZ9lCwaQgf31wjEBDnt4gb8WIn7wcNOqMx1gtGF0Y5/8//5e7UT9UEv9uLINrW+4DRg/saX1+9VJrySEXlSzMfS3mgkJ5z9uCTnb145EPtfBwo2JvuaI1QLk1Fyx6i45TWAxTyE8nXktset5tEXrCzvElSDj6pY5jWARN1CJvNswFLJvVdYBhKE/DCqeVD7hgnplsJPRmsUJf+Z1VO9nRIgZ1YJ50BQPGG0yPJMSwoe4WJYKM4VVPFimwRYvVwuKALOCEONmyz3gzBOqqZxqiGujXCfxeUYwaFr7NTnYpRk0+5UQclaXN7Wr7VSeJTgOKS4Jb6JwTr5ZLXGRio+Gip+JZUVy04Au/tUWeuX4w745bGqSDtHnIkopUX4tQ8WMeLuIshXSzONmvdmV517ZTbKUzSSWJ4s88M5GOQgkeWjrD+E45RyMZTbs/ohDbgXBadSH+HZuIxTliwN2Mv5GzFQxdyGiIAsf5QluCd5W6l5/XlUZVWdKgyN4xGZSeGhfhKT2C8LRlmrD9KGPk7tCGzK4Fs3TRtCCAhpiLNPxNDLyonVCbvHQbLaLmAREb43q0dcA3GW9ayGiKSstmhlLTC6J34MNvngWZeppXgUxzaXK8HGMEtGKfMhqpo/IJ4SBHXjjwnyP4LX8UUmLUYNNnuplobPKHxvStJQOPsewWtwaWBk5eZwhF4w0mcdl/0LkehSnpq/1o3SguXkR0RfYseepSbL2EqDo/gi2X2m5g+GWe1EkWUucdysOjnjvVJXBUZGANzOoq9zy/kS8YZboS1pklgdZjqXDT/rJmlA6fq+Ul959HBEZFKFNDk2iNNxyENbInYTjLI8OhjRSmAk7FvhRMSzzJlfeJnjeKWjWD+qqemh1qYmojH7cj7yKMmyoBYjZCIiJsa6QRr8SFiPFYZ3grs4IN66LmkYRfjBlEg1qH7Y0KGFllGjNo5ubr5j5MiRzJEs8RjLyoBw1FZasdUUkzfrBknD0G8dasKvkQPakviV55r6ESMKHa2tLzY3N/fl02L0y6p4J/HSNYtaMtabJwmPACaQYbFnRhyOdc2AZKhGofaWlvVtLS2sbq2JKwbEJNy8PkFIda5ZlECz3jwpeERYaSkYzq3CumZAU1dXV2hrbi50tLRcqH9bjjvyuNIObMPnVLPSNB6WodYZ6QR4D0rDKYEBtWNAbW19HTPJl2temxBxy9uUVZrGQ7hDWDjSXChakDoY0OjW1g0yIqtiPCtPHvfmtQmQa+NhAkwMUFhM1PpjfyeXsBLrbG9/RZNoa/VDdkRafZVr48HTGhaT5rwk6+WGxoaGwpjWVrzN1vYGAWvmdTWSW+Nh1LGS/UgWtF4/6NESnlWYVYQJB2Iao08ixkOpe+vNa4F9qLCo2JBVDT7nGDF8eGFcRwf7Ttbow56eeV0NcGxnzeKwUuvNq4W0lx1FWEnfZ8DB6KP5jzV5jnNOeqUcL2oWG5DWm1cLu95h4dPpjxAEp8ADPW706B/qv8Mi3IOQXfO6KsCFksg5o2yMJnmi3zIRFr8m67WeEGM7OjZ0dHQQsxQWlTPMa6rAcqFULcIGkjqcjd3jsDh/ynqtJ0TrqFHMfaxw3KQqpxJpYLlQahLl5WtNr2G+YxVwItXGer0nRGN9fWFcZ6e1EvqQMK+pAKI2txKpiMPzeeay1K4mVZcIv7AIL7Ve6zFg43Rcezt5XGHxozSviYDQUwYFvPrpn6deX1/PgW08fqiTVwls6IWVxC9mUNHY0EC6jBWyYfV5FITEjhdOarEwO8lTFme/8CTljac6CJcd9PLGUx3eeCRvPNXhjUfyxlMd3ngkbzzV4Y1H8sZTHd54JG881eGNR/LGUx3eeCRvPNXhjUfyxlMd3ngkbzzV4Y1HIqjb6hxPeTI5RD/vovqF1TmeviEuiqzaQS86IcvqnwMBMkW9NulOYXWSx4ZKbV6bdISwOsljQ2V8r03i0UVopdVRnvdC2T2vkPySPRomyhye4mXo+8LqNM+fIZffqw+RzJZkguFAggqlfZXc9dokArtJ6Lc6cLBCpZJ+Od7IRVGkmxP4kj4L1DVo/1dEohXZB4uoAU3Zf6tjBzIYDbnnpHl71Sg6kUpiLFOzLqWfFVQJYV5znuDISsc1ZMifAFwp9L/8UBD+AAAAAElFTkSuQmCC"
          preserveAspectRatio="none"
          id="prefix__p"
        />
      </defs>
      <g clipPath="url(#prefix__a)">
        <path fill="#FFF" d="M0 0h1280v720H0z" />
        <g
          clipPath="url(#prefix__b)"
          transform="matrix(.0001 0 0 .0001 76 191)"
        >
          <g
            clipPath="url(#prefix__c)"
            transform="matrix(1 0 0 1.00493 -.063 0)"
          >
            <use
              width="100%"
              height="100%"
              xlinkHref="#prefix__d"
              transform="scale(5431.35)"
            />
          </g>
        </g>
        <g clipPath="url(#prefix__e)">
          <g clipPath="url(#prefix__f)">
            <g clipPath="url(#prefix__g)">
              <path d="M1045 200.8a9 9 0 11-18 0 9 9 0 0118 0zM1093 200.8a9 9 0 11-18 0 9 9 0 0118 0zM1078 244.2v-9c0-1.4-.6-2.8-1.8-3.6-2.4-2-5.6-3.4-8.8-4.2-2.2-.6-4.8-1.2-7.4-1.2-2.4 0-5 .4-7.4 1.2-3.2.8-6.2 2.4-8.8 4.2-1.2 1-1.8 2.2-1.8 3.6v9h36zM1069 214.8a9 9 0 11-18 0 9 9 0 0118 0zM1100.2 217.6c-2.4-2-5.6-3.4-8.8-4.2-2.2-.6-4.8-1.2-7.4-1.2-2.4 0-5 .4-7.4 1.2-1.2.4-2.4.8-3.6 1.4v.2c0 3.4-1.4 6.6-3.6 8.8 3.8 1.2 6.8 2.8 9.2 4.6.6.6 1.2 1 1.6 1.8h21.8v-9c0-1.4-.6-2.8-1.8-3.6zM1041.4 228.4c2.8-2 6-3.6 9.2-4.6-2.2-2.4-3.6-5.4-3.6-8.8v-.4c-1.2-.4-2.4-1-3.6-1.2-2.2-.6-4.8-1.2-7.4-1.2-2.4 0-5 .4-7.4 1.2-3.2 1-6.2 2.4-8.8 4.2-1.2.8-1.8 2.2-1.8 3.6v9h21.6c.6-.8 1-1.2 1.8-1.8z" />
            </g>
          </g>
        </g>
        <g clipPath="url(#prefix__h)">
          <g clipPath="url(#prefix__i)">
            <g clipPath="url(#prefix__j)">
              <path d="M1122 185.8a9 9 0 11-18 0 9 9 0 0118 0zM1170 185.8a9 9 0 11-18 0 9 9 0 0118 0zM1155 229.2v-9c0-1.4-.6-2.8-1.8-3.6-2.4-2-5.6-3.4-8.8-4.2-2.2-.6-4.8-1.2-7.4-1.2-2.4 0-5 .4-7.4 1.2-3.2.8-6.2 2.4-8.8 4.2-1.2 1-1.8 2.2-1.8 3.6v9h36zM1146 199.8a9 9 0 11-18 0 9 9 0 0118 0zM1177.2 202.6c-2.4-2-5.6-3.4-8.8-4.2-2.2-.6-4.8-1.2-7.4-1.2-2.4 0-5 .4-7.4 1.2-1.2.4-2.4.8-3.6 1.4v.2c0 3.4-1.4 6.6-3.6 8.8 3.8 1.2 6.8 2.8 9.2 4.6.6.6 1.2 1 1.6 1.8h21.8v-9c0-1.4-.6-2.8-1.8-3.6zM1118.4 213.4c2.8-2 6-3.6 9.2-4.6-2.2-2.4-3.6-5.4-3.6-8.8v-.4c-1.2-.4-2.4-1-3.6-1.2-2.2-.6-4.8-1.2-7.4-1.2-2.4 0-5 .4-7.4 1.2-3.2 1-6.2 2.4-8.8 4.2-1.2.8-1.8 2.2-1.8 3.6v9h21.6c.6-.8 1-1.2 1.8-1.8z" />
            </g>
          </g>
        </g>
        <g clipPath="url(#prefix__k)">
          <g clipPath="url(#prefix__l)">
            <g clipPath="url(#prefix__m)">
              <path d="M1122 234.8a9 9 0 11-18 0 9 9 0 0118 0zM1170 234.8a9 9 0 11-18 0 9 9 0 0118 0zM1155 278.2v-9c0-1.4-.6-2.8-1.8-3.6-2.4-2-5.6-3.4-8.8-4.2-2.2-.6-4.8-1.2-7.4-1.2-2.4 0-5 .4-7.4 1.2-3.2.8-6.2 2.4-8.8 4.2-1.2 1-1.8 2.2-1.8 3.6v9h36zM1146 248.8a9 9 0 11-18 0 9 9 0 0118 0zM1177.2 251.6c-2.4-2-5.6-3.4-8.8-4.2-2.2-.6-4.8-1.2-7.4-1.2-2.4 0-5 .4-7.4 1.2-1.2.4-2.4.8-3.6 1.4v.2c0 3.4-1.4 6.6-3.6 8.8 3.8 1.2 6.8 2.8 9.2 4.6.6.6 1.2 1 1.6 1.8h21.8v-9c0-1.4-.6-2.8-1.8-3.6zM1118.4 262.4c2.8-2 6-3.6 9.2-4.6-2.2-2.4-3.6-5.4-3.6-8.8v-.4c-1.2-.4-2.4-1-3.6-1.2-2.2-.6-4.8-1.2-7.4-1.2-2.4 0-5 .4-7.4 1.2-3.2 1-6.2 2.4-8.8 4.2-1.2.8-1.8 2.2-1.8 3.6v9h21.6c.6-.8 1-1.2 1.8-1.8z" />
            </g>
          </g>
        </g>
        <g
          clipPath="url(#prefix__n)"
          transform="matrix(.0001 0 0 .0001 651 150)"
        >
          <g
            clipPath="url(#prefix__o)"
            transform="matrix(1.00335 0 0 1 -.5 -.125)"
          >
            <use
              width="100%"
              height="100%"
              xlinkHref="#prefix__p"
              transform="scale(8099.1)"
            />
          </g>
        </g>
        <text
          fontFamily="Calibri,Calibri_MSFontService,sans-serif"
          fontWeight={700}
          fontSize={32}
          transform="translate(639.551 318)"
        >
          {"TeamTune"}
        </text>
        <g clipPath="url(#prefix__q)">
          <g clipPath="url(#prefix__r)">
            <g clipPath="url(#prefix__s)" fill="#00B050">
              <path d="M745.333 517.188c0 10.953-8.879 19.833-19.833 19.833-10.954 0-19.833-8.88-19.833-19.833 0-10.954 8.879-19.834 19.833-19.834 10.954 0 19.833 8.88 19.833 19.834zM765.167 581.646v-19.834c0-2.974-1.488-5.95-3.967-7.933-5.454-4.462-12.396-7.437-19.338-9.421-4.958-1.487-10.412-2.479-16.362-2.479-5.454 0-10.908.992-16.362 2.479-6.942 1.984-13.884 5.454-19.338 9.421-2.479 1.983-3.967 4.959-3.967 7.933v19.834h79.334z" />
            </g>
          </g>
        </g>
        <path
          d="M969 249H845v8l-16-16 16-16v8h124z"
          fill="#767171"
          fillRule="evenodd"
          fillOpacity={0.4}
        />
        <path
          d="M633 547.498H330.162V321.931h16.659L319.411 287 292 321.931h16.659V569H633zM714 476V352h-8l16-16 16 16h-8v124z"
          fill="#767171"
          fillRule="evenodd"
        />
        <text
          fontFamily="Calibri,Calibri_MSFontService,sans-serif"
          fontWeight={400}
          fontSize={19}
          transform="translate(772.977 393)"
        >
          {"Setup a "}
          <tspan x={61.067} y={0}>
            {"TeamTune"}
          </tspan>
          <tspan x={-21.32} y={23}>
            {"account"}
          </tspan>
          <tspan x={43.02} y={23}>
            {"that"}
          </tspan>
          <tspan x={78.513} y={23}>
            {"is "}
          </tspan>
          <tspan x={94.347} y={23}>
            {"linked"}
          </tspan>
          <tspan x={144.08} y={23}>
            {"to"}
          </tspan>
          <tspan x={-10.98} y={45}>
            {"your"}
          </tspan>
          <tspan x={27.633} y={45}>
            {"Spotify "}
          </tspan>
          <tspan x={84.893} y={45}>
            {"account"}
          </tspan>
          {"."}
        </text>
        <path
          d="M443 241l16-16v8h107v-8l16 16-16 16v-8H459v8z"
          fill="#767171"
          fillRule="evenodd"
        />
        <text
          fontFamily="Calibri,Calibri_MSFontService,sans-serif"
          fontWeight={400}
          fontSize={19}
          transform="translate(869.025 588)"
        >
          {"Invite"}
          <tspan x={46.66} y={0}>
            {"friends"}
          </tspan>
          <tspan x={103.66} y={0}>
            {"or"}
          </tspan>
          <tspan x={124.16} y={0}>
            {"colleagues"}
          </tspan>
          <tspan x={208.173} y={0}>
            {"to"}
          </tspan>
          <tspan x={-5.153} y={23}>
            {"collaborate"}
          </tspan>
          <tspan x={84.273} y={23}>
            {"on "}
          </tspan>
          <tspan x={108.107} y={23}>
            {"shared"}
          </tspan>
          <tspan x={163.86} y={23}>
            {"playlists"}
          </tspan>
          <tspan x={224.64} y={23}>
            {"."}
          </tspan>
          <tspan x={-526.788} y={0}>
            {"Setup a "}
          </tspan>
          <tspan x={-465.721} y={0}>
            {"TeamTune"}
          </tspan>
          <tspan x={-383.874} y={0}>
            {"account"}
          </tspan>
          <tspan x={-319.534} y={0}>
            {"that"}
          </tspan>
          <tspan x={-284.041} y={0}>
            {"is "}
          </tspan>
          <tspan x={-514.881} y={23}>
            {"linked"}
          </tspan>
          <tspan x={-465.148} y={23}>
            {"to"}
          </tspan>
          <tspan x={-444.994} y={23}>
            {"your"}
          </tspan>
          <tspan x={-406.381} y={23}>
            {"Spotify "}
          </tspan>
          <tspan x={-349.121} y={23}>
            {"account"}
          </tspan>
          {"."}
          <tspan fontSize={16} x={-58.459} y={-413}>
            {"Invited"}
          </tspan>
          <tspan fontSize={16} x={-10.399} y={-413}>
            {"users"}
          </tspan>
          <tspan fontSize={16} x={27.494} y={-413}>
            {"can"}
          </tspan>
          <tspan fontSize={16} x={53.861} y={-413}>
            {"add"}
          </tspan>
          <tspan fontSize={16} x={81.861} y={-413}>
            {"songs"}
          </tspan>
          <tspan fontSize={16} x={-59.553} y={-394}>
            {"to"}
          </tspan>
          <tspan fontSize={16} x={-42.206} y={-394}>
            {"playlists"}
          </tspan>
          <tspan fontSize={16} x={13.147} y={-394}>
            {"to"}
          </tspan>
          <tspan fontSize={16} x={30.494} y={-394}>
            {"create"}
          </tspan>
          <tspan fontSize={16} x={74.961} y={-394}>
            {"unique"}
          </tspan>
          <tspan fontSize={16} x={-54.493} y={-375}>
            {"and "}
          </tspan>
          <tspan fontSize={16} x={-26.493} y={-375}>
            {"personalized"}
          </tspan>
          <tspan fontSize={16} x={59.207} y={-375}>
            {"playlists"}
          </tspan>
          <tspan fontSize={16} x={110.894} y={-375}>
            {"."}
          </tspan>
          <tspan fontSize={16} x={-503.246} y={-413}>
            {"TeamTune"}
          </tspan>
          <tspan fontSize={16} x={-433.159} y={-413}>
            {"uses"}
          </tspan>
          <tspan fontSize={16} x={-400.493} y={-413}>
            {"the"}
          </tspan>
          <tspan fontSize={16} x={-375.159} y={-413}>
            {"Spotify API: "}
          </tspan>
          <tspan fontSize={16} x={-296.579} y={-413}>
            {"access"}
          </tspan>
          <tspan fontSize={16} x={-250.913} y={-413}>
            {"to"}
          </tspan>
          <tspan fontSize={16} x={-233.566} y={-413}>
            {"all "}
          </tspan>
          <tspan fontSize={16} x={-482.646} y={-394}>
            {"songs"}
          </tspan>
          <tspan fontSize={16} x={-445.646} y={-394}>
            {", "}
          </tspan>
          <tspan fontSize={16} x={-437.979} y={-394}>
            {"mirrors"}
          </tspan>
          <tspan fontSize={16} x={-387.013} y={-394}>
            {"the"}
          </tspan>
          <tspan fontSize={16} x={-361.679} y={-394}>
            {"user"}
          </tspan>
          <tspan fontSize={16} x={-333.513} y={-394}>
            {"\xB4"}
          </tspan>
          <tspan fontSize={16} x={-328.846} y={-394}>
            {"s"}
          </tspan>
          <tspan fontSize={16} x={-318.846} y={-394}>
            {"playlists"}
          </tspan>
          <tspan fontSize={16} x={-263.492} y={-394}>
            {"and "}
          </tspan>
          <tspan fontSize={16} x={-416.433} y={-375}>
            {"create"}
          </tspan>
          <tspan fontSize={16} x={-371.966} y={-375}>
            {"new"}
          </tspan>
          <tspan fontSize={16} x={-340.546} y={-375}>
            {"ones"}
          </tspan>
          <tspan fontSize={16} x={-309.379} y={-375}>
            {"."}
          </tspan>
        </text>
        <path
          d="M817 547.498h302.84V321.931h-16.66L1130.59 287l27.41 34.931h-16.66V569H817z"
          fill="#767171"
          fillRule="evenodd"
          fillOpacity={0.4}
        />
      </g>
    </svg>
  )
}

export default TeamTuneOverviewImage;
