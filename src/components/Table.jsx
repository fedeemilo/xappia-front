import {
    thsToyota,
    trsToyota,
    thsVolkswagen,
    trsVolkswagen,
    thsChevrolet,
    trsChevrolet,
    thsEan,
    trsEan
} from "../constants/tableData";
import { createTableStructure } from "../utils/createTableStructure";

const toyotaStructure = createTableStructure(thsToyota, trsToyota);
const volkswagenStructure = createTableStructure(thsVolkswagen, trsVolkswagen);
const chevroletStructure = createTableStructure(
    thsChevrolet,
    trsChevrolet,
    "chevrolet"
);
const eanStructure = createTableStructure(thsEan, trsEan);

const Table = ({ brand }) => {
    if (brand === "toyota") return toyotaStructure;

    if (brand === "volkswagen") return volkswagenStructure;

    if (brand === "chevrolet") return chevroletStructure;

    if (brand === "ean") return eanStructure;
};

export default Table;
