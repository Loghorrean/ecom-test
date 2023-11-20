import styles from "./Header.module.scss";
import Container from "@/src/shared/ui/layout/Container";
import MainLogoImage from "@/src/shared/ui/images/MainLogoImage";
import ProjectLink from "@/src/shared/ui/links/ProjectLink";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";
import { cn } from "@/src/shared/utils/functions";
import DropdownArrow from "@/src/shared/ui/svg/arrows/DropdownArrow";
import { Button } from "@/src/shared/ui/buttons";
import { BellIcon } from "@/src/shared/ui/svg/common/BellIcon";
import mockUserImage from "@/public/images/mock/mock-user.jpg";
import { ProjectImage } from "@/src/shared/ui/images";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__container}>
                    <MainLogoImage />
                    <nav>
                        <ul className={styles.header__list}>
                            <li>
                                <ProjectLink href="/home" className={styles.header__link}>
                                    Продавцы
                                </ProjectLink>
                            </li>
                            <li
                                className={cn(
                                    styles.header__link,
                                    styles.header__link___active,
                                    styles.header__dropdown
                                )}
                            >
                                <div>Мои кампании</div>
                                <DropdownArrow size={SVG_CONTAINER_SIZE.SIZE_24} />
                            </li>
                            <li>
                                <ProjectLink href="/home" className={styles.header__link}>
                                    Продавцы
                                </ProjectLink>
                            </li>
                            <li className={cn(styles.header__link, styles.header__dropdown)}>
                                <div>Возможности</div>
                                <DropdownArrow size={SVG_CONTAINER_SIZE.SIZE_24} />
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.header__right}>
                        <ProjectLink href="/home" className={styles.header__link}>
                            Поддержка
                        </ProjectLink>
                        <ProjectLink href="/home" className={styles.header__link}>
                            Тарифы
                        </ProjectLink>
                        <Button className={styles.header__bell}>
                            <BellIcon />
                        </Button>
                        <div className={styles.header__user}>
                            <ProjectImage
                                className={styles.header__user_photo}
                                width={50}
                                height={50}
                                src={mockUserImage}
                                alt="User image"
                            />
                            <DropdownArrow size={SVG_CONTAINER_SIZE.SIZE_24} />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
