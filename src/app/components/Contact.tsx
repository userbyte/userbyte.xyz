import styles from "@/app/style/modules/components/Contact.module.css";
import { socialLinks } from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className={styles.main}>
      <h2>need to get in contact with me?</h2>
      <p>
        my preferred contact method is discord{" "}
        <a href={socialLinks.discord} target="_blank">
          (@userbyte)
        </a>
        <br />
        my settings are set to allow all DMs and friend requests, you may send
        me a direct message, or send a friend request if need be.
      </p>
      <p>
        in the case you do not want to deal with the difficulties of discord,
        you can email me at:{" "}
        <a href="mailto:contact@userbyte.xyz">{socialLinks.email}</a>
      </p>

      <p>
        what was that? did you say "big brother is always watching?"
        <br /> yeah, probably. here is my{" "}
        <a href="https://keys.openpgp.org/vks/v1/by-fingerprint/2E9B572A369F8FC4D62645150452996E07B1F269">
          PGP <FontAwesomeIcon icon={faDownload} />
        </a>
        :
        <br />
        <a href="https://keys.openpgp.org/vks/v1/by-fingerprint/2E9B572A369F8FC4D62645150452996E07B1F269">
          <code>
            -----BEGIN PGP PUBLIC KEY BLOCK-----
            <br />
            mQENBGi/yUcBCADJ7YfKn30CB6QZhS5/yZsMu/9XzNmQPqi/7WiF9pU9/JgdcuPc
            <br />
            SknSMgGad7vV8ukyARIX7ffbEcRmelFdORyQAcgSXXEe1GXsmYv1HDYCnm9VTBFg
            <br />
            8uO9LDijUNutOQq4t7gD8eStDuGqSezsbk96JASCYCfoaHo+a/MmaNwSLQxdWdCR
            <br />
            ByvfnO5cJ9bWbU1mPw3csrL9mDi9cP77urDQU6rFLgf6Q2MnnR0SYcIWZj/y+1hr
            <br />
            bfJ6TtqWyN60shrW4fnbOUmfo/0seGQXgFKPCnFeFoNzvwCjwVdwV5oHenR3WwcH
            <br />
            kB16q+HomNuqmrS3EdR/SMQuusFgfntpTu0LABEBAAG0IHVzZXJieXRlKCk8Y29u
            <br />
            dGFjdEB1c2VyYnl0ZS54eXo+iQFRBBMBCAA7FiEELptXKjafj8TWJkUVBFKZbgex
            <br />
            8mkFAmi/yUcCGy8FCwkIBwICIgIGFQoJCAsCBBYCAwECHgcCF4AACgkQBFKZbgex
            <br />
            8mmflAf9FNyRiSXCAO4xQGenE+hM9PZeaoWXcdSX+QqbzbrTqLFCNWZt5FHaEYbP
            <br />
            tuq1SF4Zuqsxz/dND5GSF1tUcMpEWF/aRlviJVstSOove30YspGhhiYXT0BoauX+
            <br />
            /7txFpeENzBovlzNJBwmQ737mbuKQgr01SmmpxOP75IFFw5Arq7V1G1JnX13nKwU
            <br />
            7UrciLG22/2slHpEZZkDII1sJIKkk70TNdHFRzl4nuERNy1Fi7hjah5YUkHZH0Zc
            <br />
            2vVTtoGdo5yQqlQ3X4NKHZ+mHv76rgtaYiAemvFmBlLGIeQzV/lWxbxKyjs7IvnO
            <br />
            bC058ywwU17zkihAU9ZiFH2K/j7zBbkBDQRov8lHAQgAt/zvab0Ivuw3HcL4CaJ3
            <br />
            BBLddaQUjzL8fuNrZX+wx8wTjaGebZA0dJuWMRkGcof6x1g7yIyw0pPOWRTfyRYD
            <br />
            iqEdwd7u3hH9CSS7BbFf2/zmQkJRbqKHD4f2z4ktNrK9gULWAXZ9cJZAyK5dZFoz
            <br />
            VHUhkvBP4HPNO4Gd0HKSrIzlGzA+SpBimLNAuoEbeCMKmGD57EmD2WuKBBfFRxAk
            <br />
            ixVC141z+y+DKHBNZnAbaytkmLF383MN9U7IQwAIptg47Wqh7f3uYylLU3HH/Wx2
            <br />
            0TZuXZGdM6wYVf+KayBgxphVwVnrYuGckSumnHXoejXIuSbGMWSTFqPoH1eMHEPF
            <br />
            IQARAQABiQJsBBgBCAAgFiEELptXKjafj8TWJkUVBFKZbgex8mkFAmi/yUcCGy4B
            <br />
            QAkQBFKZbgex8mnAdCAEGQEIAB0WIQQO3V7Up1hIxcMajimABth6UNy1mwUCaL/J
            <br />
            RwAKCRCABth6UNy1m27TB/wMeIGIp9N6+IMR0XzsKYbB5XZNLaF229o5V7Yvtxj9
            <br />
            AdCR7mmJBVZQQv/dNWbmqr1VeHzaNzPRVLNec31oOtp4PSZ90aZiX2RkXsWtgjKs
            <br />
            8L9vnCLIV4HBhTFiTX8rWkH1siXdUgFd4xjdJGOWgZc//jpIqmBpLL5Km2S3r+eV
            <br />
            HQvO1zKkEkhnwqjvLU78XLujzR2E9wEjEr2U2QNsuOtaSLDR0CIAG6cFsGOp6/7n
            <br />
            NYZPYILz4ItzFeEkEe9nP8qvzmoA6/vz86U/w+8YrCFkgnaYsXB0t/gKOI0kvWXq
            <br />
            0G3V9agV0oS/O9euGSONVw5WZZNlDxhoxyyjdRsyKGacOyEH/2XazBKzidvCqlof
            <br />
            FBqNKRCKDknzrdUhm2OOFSzsmOEJieX6YCZsKFOaaqRA9M1xi0xTDFsoONd5jJJ7
            <br />
            kauC7utDDJ4thuKLHhDCn+Cy1WTTyyJE71Haf54slU6chIBavxDogahba64AeXV5
            <br />
            G/mJ4j15A8r5sVLYOBmKrJqWsnknK2RxShP31Rn/YvjsIFDoD9iImqyoK8hO3kmA
            <br />
            VwWS+ZaTvZeVe/iE2MaT1M4PfRfc0LdIjZGtWid/VL+t/eQrZLJq3jBriXlHQ4DB
            <br />
            62p4sFDLMC7SOFP+69C6bj59lmKa3FtcTjjiCEq22zW4+vEgjsRq9Nxuk9l2yx+A
            <br />
            jJjlBEA=
            <br />
            =mBXl
            <br />
            -----END PGP PUBLIC KEY BLOCK-----
          </code>
        </a>
      </p>
    </div>
  );
}
