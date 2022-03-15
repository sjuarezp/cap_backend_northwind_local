using {managed} from '@sap/cds/common';

namespace csti.sjp.northwind;


entity Category : managed {
    key id            : Integer;
        category_name : String(100);
}


entity Product : managed {
    key id           : Integer;
        product_code : String(20);
        product_name : String(100);
        description  : String(200);
        cost         : Decimal;
        price        : Decimal;
        url          : String(500);
        category     : Association to Category;
}
