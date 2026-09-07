import Button from "./Button";

export default function CtaBanner() {
  return (
    <section className="w-full bg-white ">
      <div className="w-full min-[1200px]:px-30">
        <div className="flex w-full flex-col items-center gap-8 rounded-[32px] bg-[#003628] px-7 py-8 text-center">
          <div className="flex flex-col gap-2 text-white">
            <span className="text-2xl md:text-[32px] font-semibold md:font-bold">
              Ready to Simplify Your Shoot Workflow?
            </span>

            <span className="text-base font-extralight leading-relaxed text-[#D5E5E1]">
              From planning and team collaboration to approvals and final
              delivery, manage{" "}
              <br className="hidden min-[745px]:inline" />
              every part of your shoot workflow in one simple, organized
              platform.
            </span>
          </div>

          <div className="flex flex-col gap-3 min-[600px]:flex-row">
            <Button
              variant="primary"
              text="Start 14-Days Free Trial"
            />

            <Button
              variant="secondary"
              text="View Demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}