import classnames from "classnames";
import {RComponent} from "../../../../common/r-component";
import {FixedHeaderPanel} from "../common/fixed-header-panel";
import {renderBillItems} from "./summary-bill-items";

export class SummaryStep extends RComponent {

    render() {
        const {
            bill, onChange,
            onGoItems, onGoCustomerInfo, onGoLocation
        } = this.props;

        return (
            <FixedHeaderPanel
                className="summary-step"
                title="Đơn hàng"
                index={{step: 4, total: 4}}
                onBack={onGoItems}
            >
                <div className="header-separator"/>

                {renderBillItems((items) => {
                    onChange({items});
                    !items.length && onGoItems();
                }, bill.items)}

                {renderCustomerInfo(bill.customer, onGoCustomerInfo)}

                {renderLocation(bill.location, onGoLocation)}

            </FixedHeaderPanel>
        );
    }
}

const renderCustomerInfo = (customer, onEdit) => (
    <div className="" onClick={onEdit}>
        {customer.name} - {customer.phone}
    </div>
);

const renderLocation = (location, onEdit) => (
    <div className="" onClick={onEdit}>
        {location.address}, {location.district}, {location.city}
    </div>
);
