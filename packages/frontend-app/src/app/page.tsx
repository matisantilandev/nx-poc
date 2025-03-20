import { Button } from '@gilly/ui-library';

export default function Index() {
  return (
    <div className="w-full h-screen bg-black grid gap-9 p-10 place-content-center items-center">
      <p className="text-xl text-white">Size sm</p>
      <div className="flex justify-start gap-4 flex-wrap">
        <Button size="small" className="w-1/4">
          Click me
        </Button>
        <Button size="small" color="error" className="w-1/4">
          Click me
        </Button>
        <Button size="small" color="warning" className="w-1/4">
          Click me
        </Button>
        <Button size="small" color="success" className="w-1/4">
          Click me
        </Button>
        <Button size="small" color="gray" className="w-1/4">
          Click me
        </Button>
      </div>
      <p className="text-xl text-white">Size md</p>
      <div className="flex justify-start gap-4 flex-wrap">
        <Button size="medium" className="w-1/2">
          Click me
        </Button>
        <Button size="medium" color="error" className="w-1/2">
          Click me
        </Button>
        <Button size="medium" color="warning" className="w-1/2">
          Click me
        </Button>
        <Button size="medium" color="success" className="w-1/2">
          Click me
        </Button>
        <Button size="medium" color="gray" className="w-1/2">
          Click me
        </Button>
      </div>

      <p className="text-xl text-white">Size lg</p>
      <div className="flex justify-start gap-4 flex-wrap">
        <Button>Click me</Button>
        <Button color="error">Click me</Button>
        <Button color="warning">Click me</Button>
        <Button color="success">Click me</Button>
        <Button color="gray">Click me</Button>
      </div>
    </div>
  );
}
