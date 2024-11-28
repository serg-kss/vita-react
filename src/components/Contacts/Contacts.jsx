import styles from './Contacts.module.scss'

function Contacts(){
    return (
        <div className={styles.contacts}>
            <h1>Contacts</h1>
            <p>Контакти
Наша служба підтримки працює щодня з 9:00 до 20:00.

Телефони (вартість за тарифом вашого оператора):

+38 (044) 355-55-55
+38 (067) 174-77-04 (Київстар)
+38 (073) 174-77-04 (Life)
+38 (099) 174-77-04 (Vodafone)
Пошта та мессенджери:

E-mail – support@kasta.ua;
Telegram – http://t.me/KastaUaBot;
Facebook – https://www.facebook.com/Kasta.Ukraine;
Адміністратор сайту:
Товариство з обмеженою відповідальністю «Маркасон», код ЄДРПОУ 37118680.

Наша адреса: 02121, м Київ, Харківське шосе, 201/203</p>
        </div>
    )
}

export default Contacts