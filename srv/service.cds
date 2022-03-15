using {csti.sjp.northwind as my} from '../db/schema';

service Service @(path : '/csti') {

    entity Categories as projection on my.Category;
    entity Products as projection on my.Product;

}
