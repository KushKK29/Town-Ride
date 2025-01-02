import React from "react";

const Returns = () => {
  return (
    <div className="max-w-7xl py-8 relative px-4">
      <div className="absolute top-0 right-0 w-64 h-64 grid grid-cols-8 gap-1 opacity-20">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />
        ))}
      </div>

      <div className="relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
          Returns Policy
        </h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Returns
            </h2>
            <div className="space-y-3 text-base">
              <p>
                Our policy lasts 30 days. If 30 days have gone by since your
                purchase, unfortunately we can't offer you a refund or exchange.
              </p>
              <p>
                To be eligible for a return, your item must be unused and in the
                same condition that you received it. It must also be in the
                original packaging.
              </p>
              <p>
                Several types of goods are exempt from being returned.
                Perishable goods such as food, flowers, newspapers or magazines
                cannot be returned. We also do not accept products that are
                intimate or sanitary goods, hazardous materials, or flammable
                liquids or gases.
              </p>
              <p>
                Additional non-returnable items:
                <ul className="list-disc ml-3 pl-5 space-y-2">
                  <li>Gift cards</li>
                  <li>Downloadable software products</li>
                  <li>Some health and personal care items</li>
                </ul>
              </p>
              <p>
                To complete your return, we require a receipt or proof of
                purchase. <br />
                Please do not send your purchase back to the manufacturer.
              </p>
              <p>
                There are certain situations where only partial refunds are
                granted: (if applicable) Book with obvious signs of use CD, DVD,
                VHS tape, software, video game, cassette tape, or vinyl record
                that has been opened. Any item not in its original condition, is
                damaged or missing parts for reasons not due to our error. Any
                item that is returned more than 30 days after delivery
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Refunds (if applicable)
            </h2>
            <div className="space-y-3 text-base">
              <p>
                Once your return is received and inspected, we will send you an
                email to notify you that we have received your returned item. We
                will also notify you of the approval or rejection of your
                refund. If you are approved, then your refund will be processed,
                and a credit will automatically be applied to your credit card
                or original method of payment, within a certain amount of days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Late or missing refunds (if applicable)
            </h2>
            <div className="space-y-3 text-base">
              <p>
                If you haven’t received a refund yet, first check your bank
                account again. Then contact your credit card company, it may
                take some time before your refund is officially posted. Next
                contact your bank. There is often some processing time before a
                refund is posted. If you’ve done all of this and you still have
                not received your refund yet, please contact us at{" "}
                <a
                  href="mailto:townride38@gmail.com"
                  class="text-blue-500 hover:underline"
                >
                  townride38@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Sale items (if applicable)
            </h2>
            <div className="space-y-3 text-base">
              <p>
                Only regular priced items may be refunded, unfortunately sale
                items cannot be refunded.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Exchanges (if applicable)
            </h2>
            <div className="space-y-3 text-base">
              <p>
                We only replace items if they are defective or damaged. If you
                need to exchange it for the same item, send us an email at{" "}
                <a
                  href="mailto:townride38@gmail.com"
                  class="text-blue-500 hover:underline"
                >
                  townride38@gmail.com
                </a>{" "}
                and send your item to: Dhanyasree Residency,201,Eswar villas
                road, Nizampet 500090, India.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Gifts Return
            </h2>
            <div className="space-y-3 text-base">
              <p>
                If the item was marked as a gift when purchased and shipped
                directly to you, you’ll receive a gift credit for the value of
                your return. Once the returned item is received, a gift
                certificate will be mailed to you.
              </p>
              <p>
                If the item wasn’t marked as a gift when purchased, or the gift
                giver had the order shipped to themselves to give to you later,
                we will send a refund to the gift giver and he will find out
                about your return.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Shipping Returns
            </h2>
            <div className="space-y-3 text-base">
              <p>To return your product, mail it to:</p>
              <p className="font-medium">
                Dhanyasree Residency,201,Eswar villas road, Nizampet
                <br />
                500090, India.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  You will be responsible for paying for your own shipping costs
                  for returning your item. Shipping costs are non-refundable. If
                  you receive a refund, the cost of return shipping will be
                  deducted from your refund.
                </li>
                <li>
                  Depending on where you live, the time it may take for your
                  exchanged product to reach you, may vary.
                </li>
                <li>
                  If you are shipping an item over $75, you should consider
                  using a trackable shipping service or purchasing shipping
                  insurance.
                </li>
                <li>We don't guarantee receipt of returned items</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Returns;
