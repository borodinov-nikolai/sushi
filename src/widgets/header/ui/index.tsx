import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import img_logo from '@/shared/assets/images/logo.png';
import img_logoMobile from '@/shared/assets/images/logo_mobile.png';
import icon_phone from '@/shared/assets/icons/phone_icon.png';
import Link from 'next/link';

const Header = () => {
        return (

                <header className={styles.root} >


                        <div className={styles.inner} >

                                <div className={styles.logo} >
                                        <Image className={styles.logo_logoDesktop} src={img_logo} width={214} height={48} alt='logo' />
                                        <Image className={styles.logo_logoMobile} src={img_logoMobile} width={67} height={28} alt='logo' />
                                </div>
                                <div className={styles.city} >
                                        Краснодар
                                </div>
                                <ul className={styles.navigation} >
                                        <li><Link href={'#'}>Главная</Link></li>
                                        <li><Link href={'#'}>Доставка</Link></li>
                                        <li><Link href={'#'}>нас</Link></li>
                                        <li><Link href={'#'}>Новости</Link></li>

                                </ul>

                                <Link className={styles.call} href={'tel:+38 097 699 34 38'}>
                                        <Image src={icon_phone} width={24} height={24} alt='phone' />
                                        <div className={styles.number} >+38 097 699 34 38</div>
                                </Link>

                                <div className={styles.rightMenu}>
                                        <button className={styles.rightMenu_button} >
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.05033 3.05025C8.36309 1.7375 10.1436 1 12.0001 1C13.8566 1 15.6371 1.7375 16.9498 3.05025C18.2626 4.36301 19.0001 6.14349 19.0001 8C19.0001 11.3527 19.7171 13.4346 20.378 14.6461C20.7098 15.2544 21.0329 15.6535 21.2573 15.8904C21.3698 16.0091 21.4581 16.0878 21.5114 16.1322C21.538 16.1544 21.5558 16.168 21.5635 16.1737C21.5647 16.1746 21.5657 16.1753 21.5664 16.1758C21.9249 16.4221 22.0835 16.8725 21.9572 17.2898C21.8295 17.7115 21.4407 18 21.0001 18H3.00008C2.55941 18 2.17068 17.7115 2.04299 17.2898C1.91664 16.8725 2.07528 16.4221 2.43377 16.1758C2.43447 16.1753 2.43542 16.1746 2.43663 16.1737C2.44432 16.168 2.46218 16.1544 2.4888 16.1322C2.54202 16.0878 2.6304 16.0091 2.74288 15.8904C2.9673 15.6535 3.29039 15.2544 3.62218 14.6461C4.28301 13.4346 5.00008 11.3527 5.00008 8C5.00008 6.14348 5.73758 4.36301 7.05033 3.05025ZM2.44388 16.169C2.44395 16.1689 2.44403 16.1688 2.44411 16.1688C2.44411 16.1688 2.4441 16.1688 2.4441 16.1688L2.44388 16.169ZM5.1494 16H18.8508C18.7747 15.8753 18.6983 15.7434 18.6222 15.6039C17.783 14.0654 17.0001 11.6473 17.0001 8C17.0001 6.67392 16.4733 5.40215 15.5356 4.46447C14.5979 3.52678 13.3262 3 12.0001 3C10.674 3 9.40223 3.52678 8.46454 4.46447C7.52686 5.40215 7.00008 6.67392 7.00008 8C7.00008 11.6473 6.21715 14.0654 5.37797 15.6039C5.30188 15.7434 5.22549 15.8753 5.1494 16Z" fill="#686870" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.77183 20.1352C10.2496 19.858 10.8615 20.0207 11.1386 20.4984C11.2265 20.6499 11.3527 20.7757 11.5045 20.8632C11.6563 20.9506 11.8284 20.9966 12.0036 20.9966C12.1788 20.9966 12.3509 20.9506 12.5027 20.8632C12.6545 20.7757 12.7807 20.6499 12.8686 20.4984C13.1457 20.0207 13.7576 19.858 14.2354 20.1352C14.7131 20.4123 14.8757 21.0242 14.5986 21.5019C14.3349 21.9566 13.9564 22.3339 13.5009 22.5962C13.0455 22.8586 12.5292 22.9966 12.0036 22.9966C11.478 22.9966 10.9617 22.8586 10.5063 22.5962C10.0508 22.3339 9.67232 21.9566 9.4086 21.5019C9.13148 21.0242 9.2941 20.4123 9.77183 20.1352Z" fill="#686870" />
                                                </svg>


                                        </button>
                                        <button className={styles.rightMenu_button} >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.67231 6.88373C2.99301 8.03334 2.76944 9.54025 2.98536 10.8356C3.41005 13.3834 5.61967 15.6795 7.96408 17.4158C9.10741 18.2625 10.2252 18.9342 11.0586 19.3944C11.4433 19.6068 11.7654 19.7731 11.999 19.8898C12.2326 19.7731 12.5547 19.6068 12.9394 19.3944C13.7728 18.9342 14.8906 18.2625 16.034 17.4158C18.3784 15.6795 20.588 13.3835 21.0127 10.8356C21.2286 9.54027 21.005 8.03335 20.3256 6.88373C19.6716 5.77693 18.6052 5 16.9991 5C15.3919 5 14.4126 5.78198 13.799 6.60001C13.4861 7.01722 13.2741 7.43971 13.1408 7.75963C13.0747 7.91826 13.0295 8.04799 13.0018 8.13415C12.988 8.17712 12.9786 8.20893 12.9733 8.2277L12.9683 8.24572L12.9687 8.24416C12.9685 8.24522 12.9686 8.24466 12.9683 8.24572C12.9682 8.24607 12.9684 8.2455 12.9683 8.24572C12.8556 8.68873 12.4565 9.00001 11.999 9C11.5415 8.99999 11.1425 8.68955 11.0299 8.24651C11.0298 8.2463 11.0299 8.24684 11.0299 8.24651L11.0247 8.22766C11.0193 8.2089 11.01 8.17709 10.9962 8.13412C10.9685 8.04796 10.9233 7.91823 10.8572 7.7596C10.7239 7.43969 10.5119 7.0172 10.199 6.59999C9.5855 5.78198 8.60615 4.99999 6.99893 5C5.39271 5.00001 4.3263 5.77695 3.67231 6.88373ZM11.999 8C11.0288 8.24252 11.029 8.24295 11.0291 8.24337L11.0296 8.24538L11.0299 8.24651M11.999 5.68095C11.9361 5.58783 11.8695 5.49398 11.799 5.4C10.9125 4.218 9.39184 2.99999 6.99893 3C4.60502 3.00001 2.92142 4.22307 1.95045 5.86628C1.00478 7.46667 0.728432 9.45975 1.01258 11.1644C1.57439 14.5349 4.36478 17.2389 6.77376 19.023C8.00712 19.9364 9.20437 20.6551 10.0918 21.1452C10.5364 21.3907 10.9056 21.5801 11.1655 21.709C11.2955 21.7734 11.3984 21.8229 11.4699 21.8567C11.5057 21.8736 11.5337 21.8866 11.5532 21.8957L11.5763 21.9063L11.583 21.9094L11.5852 21.9104C11.5855 21.9105 11.5865 21.9109 11.999 21L11.5865 21.9109C11.8487 22.0297 12.1493 22.0297 12.4115 21.911L11.999 21C12.4115 21.911 12.4112 21.9111 12.4115 21.911L12.4149 21.9094L12.4217 21.9063L12.4447 21.8957C12.4643 21.8866 12.4923 21.8736 12.528 21.8567C12.5996 21.8229 12.7024 21.7734 12.8325 21.709C13.0924 21.5801 13.4616 21.3907 13.9062 21.1452C14.7936 20.6551 15.9909 19.9364 17.2243 19.023C19.6333 17.2389 22.4237 14.5349 22.9855 11.1644C23.2696 9.45973 22.9932 7.46665 22.0475 5.86627C21.0765 4.22307 19.3929 3 16.9991 3C14.6062 3 13.0855 4.21802 12.199 5.39999C12.1285 5.49398 12.0619 5.58783 11.999 5.68095Z" fill="#686870" />
                                                </svg>
                                        </button>
                                        <button className={styles.rightMenu_button} >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46447 15.4645C5.40215 14.5268 6.67392 14 8 14H16C17.3261 14 18.5978 14.5268 19.5355 15.4645C20.4732 16.4021 21 17.6739 21 19V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V19C19 18.2044 18.6839 17.4413 18.1213 16.8787C17.5587 16.3161 16.7956 16 16 16H8C7.20435 16 6.44129 16.3161 5.87868 16.8787C5.31607 17.4413 5 18.2044 5 19V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V19C3 17.6739 3.52678 16.4021 4.46447 15.4645Z" fill="#686870" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65686 10.3431 10 12 10C13.6569 10 15 8.65686 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="#686870" />
                                                </svg>
                                        </button>
                                        <button className={styles.cart} >
                                                <p>Корзина</p>
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.7 1.4C5.88885 1.14819 6.18524 1 6.5 1H18.5C18.8148 1 19.1111 1.14819 19.3 1.4L22.3 5.4C22.4298 5.5731 22.5 5.78363 22.5 6V20C22.5 20.7957 22.1839 21.5587 21.6213 22.1213C21.0587 22.6839 20.2957 23 19.5 23H5.5C4.70435 23 3.94129 22.6839 3.37868 22.1213C2.81607 21.5587 2.5 20.7957 2.5 20V6C2.5 5.78363 2.57018 5.5731 2.7 5.4L5.7 1.4ZM7 3L4.5 6.33333V20C4.5 20.2652 4.60536 20.5196 4.79289 20.7071C4.98043 20.8946 5.23478 21 5.5 21H19.5C19.7652 21 20.0196 20.8946 20.2071 20.7071C20.3946 20.5196 20.5 20.2652 20.5 20V6.33333L18 3H7Z" fill="#686870" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6C2.5 5.44772 2.94772 5 3.5 5H21.5C22.0523 5 22.5 5.44772 22.5 6C22.5 6.55228 22.0523 7 21.5 7H3.5C2.94772 7 2.5 6.55228 2.5 6Z" fill="#686870" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 9C9.05228 9 9.5 9.44772 9.5 10C9.5 10.7956 9.81607 11.5587 10.3787 12.1213C10.9413 12.6839 11.7044 13 12.5 13C13.2956 13 14.0587 12.6839 14.6213 12.1213C15.1839 11.5587 15.5 10.7956 15.5 10C15.5 9.44772 15.9477 9 16.5 9C17.0523 9 17.5 9.44772 17.5 10C17.5 11.3261 16.9732 12.5979 16.0355 13.5355C15.0979 14.4732 13.8261 15 12.5 15C11.1739 15 9.90215 14.4732 8.96447 13.5355C8.02678 12.5979 7.5 11.3261 7.5 10C7.5 9.44772 7.94772 9 8.5 9Z" fill="#686870" />
                                                </svg>
                                        </button>

                                        <button className={styles.burger} >
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66699 10.0003C1.66699 9.54009 2.04009 9.16699 2.50033 9.16699H17.5003C17.9606 9.16699 18.3337 9.54009 18.3337 10.0003C18.3337 10.4606 17.9606 10.8337 17.5003 10.8337H2.50033C2.04009 10.8337 1.66699 10.4606 1.66699 10.0003Z" fill="black" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66699 5.00033C1.66699 4.54009 2.04009 4.16699 2.50033 4.16699H17.5003C17.9606 4.16699 18.3337 4.54009 18.3337 5.00033C18.3337 5.46056 17.9606 5.83366 17.5003 5.83366H2.50033C2.04009 5.83366 1.66699 5.46056 1.66699 5.00033Z" fill="black" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66699 15.0003C1.66699 14.5401 2.04009 14.167 2.50033 14.167H17.5003C17.9606 14.167 18.3337 14.5401 18.3337 15.0003C18.3337 15.4606 17.9606 15.8337 17.5003 15.8337H2.50033C2.04009 15.8337 1.66699 15.4606 1.66699 15.0003Z" fill="black" />
                                                </svg>

                                        </button>
                                </div>
                        </div>





                </header>

        )
}

export default Header