"use client";

import { useMainWbAdvertisementsContext } from "@/src/widgets/advertisements/MainWbAdvertisementsBlock/context/MainWbAdvertisementsContext";
import { ReactNode, useLayoutEffect, useMemo, useState } from "react";
import styles from "./AdvertisementsListBlock.module.scss";
import WbRegionsList from "@/src/features/region/ui/WbRegionsList";
import { createColumnHelper, getCoreRowModel } from "@tanstack/table-core";
import { AdvertisementBet } from "@/src/entities/wb/models/composables";
import { flexRender, useReactTable } from "@tanstack/react-table";
import { cn, isNotEmpty, isValueEmpty, resultIf } from "@/src/shared/utils/functions";
import Loader from "@/src/shared/ui/loaders/Loader";
import { ProjectImage } from "@/src/shared/ui/images";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import LinkIcon from "@/src/shared/ui/svg/common/LinkIcon";
import CopyIcon from "@/src/shared/ui/svg/common/CopyIcon";

const columnHelper = createColumnHelper<AdvertisementBet>();

const betColumns = [
    columnHelper.accessor("position", {
        id: "position",
        header: "Место",
        cell: props => props.getValue(),
    }),
    columnHelper.accessor("image", {
        id: "image",
        header: "Фото",
        cell: props => {
            return (
                <ProjectImage
                    className={styles.advertisements_list_block__table_photo}
                    src={props.getValue()}
                    alt="Advertisement image"
                    width={50}
                    height={65}
                />
            );
        },
    }),
    columnHelper.accessor("article", {
        id: "article",
        header: "Артикул",
        cell: ({ row }) => (
            <ExternalLink href={row.original.url} className={styles.advertisements_list_block__article}>
                <LinkIcon />
                <span>{row.original.article}</span>
                <CopyIcon />
            </ExternalLink>
        ),
    }),
    columnHelper.accessor("position_on_page", {
        id: "position_on_page",
        header: "Позиция",
        cell: props => props.getValue(),
    }),
    columnHelper.accessor("cpm", {
        id: "cpm",
        header: "Ставка",
        minSize: 192,
        cell: props => {
            return <p className={styles.advertisements_list_block__cpm}>{props.getValue()} ₽</p>;
        },
    }),
    columnHelper.accessor("subject.name", {
        id: "category",
        header: "Категория",
        cell: props => props.getValue(),
    }),
    columnHelper.accessor("delivery_time", {
        id: "delivery",
        header: "Доставка",
        cell: props => {
            return <p>{props.getValue()} ч</p>;
        },
    }),
];

const AdvertisementsListBlock = () => {
    const { loading, advertisement } = useMainWbAdvertisementsContext();
    const extractedPageNumbers = useMemo(() => {
        return Array.from(new Set(advertisement?.bets.map(item => item.page)));
    }, [advertisement]);

    const [selectedPage, setSelectedPage] = useState(1);
    useLayoutEffect(() => {
        setSelectedPage(1);
    }, [extractedPageNumbers]);

    console.log(advertisement);
    const table = useReactTable({
        columns: betColumns,
        data: isNotEmpty(advertisement) ? advertisement.bets.filter(item => item.page === selectedPage) : [],
        getCoreRowModel: getCoreRowModel(),
    });
    const renderTable = useMemo(() => {
        if (loading) {
            return <Loader dark />;
        }
        if (isValueEmpty(advertisement)) {
            return <div>Рекламные блоки не найдены</div>;
        }
        return (
            <div className={styles.advertisements_list_block__content}>
                <table cellSpacing={0} className={styles.advertisements_list_block__table}>
                    <thead className={styles.advertisements_list_block__table_head}>
                        {table.getHeaderGroups().map(group => (
                            <tr key={group.id}>
                                {group.headers.map(header => (
                                    <th key={header.id}>{header.column.columnDef.header as ReactNode}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className={styles.advertisements_list_block__table_row}>
                                {row.getVisibleCells().map(cell => (
                                    <td className={styles.advertisements_list_block__table_cell} key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {extractedPageNumbers.length !== 0 && (
                    <ul className={styles.advertisements_list_block__paginator}>
                        {extractedPageNumbers.map(page => {
                            return (
                                <li
                                    className={cn(
                                        styles.advertisements_list_block__page_button,
                                        resultIf(
                                            selectedPage === page,
                                            styles.advertisements_list_block__page_button___active
                                        )
                                    )}
                                    key={page}
                                    onClick={() => setSelectedPage(page)}
                                >
                                    {page}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        );
    }, [loading, advertisement, selectedPage]);
    return (
        <section className={styles.advertisements_list_block}>
            <WbRegionsList />
            <p className={styles.advertisements_list_block__description}>
                Est ipsum gravida sit non. Mi ac habitasse proin sollicitudin malesuada blandit. Arcu turpis cursus
                imperdiet diam tincidunt augue ut. Metus proin vel consectetur ipsum quis amet faucibus mus. Placerat
                cras ac amet dictum. Massa sed cursus dapibus morbi turpis velit id mauris at.
            </p>
            {renderTable}
        </section>
    );
};

export default AdvertisementsListBlock;
