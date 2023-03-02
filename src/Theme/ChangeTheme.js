import {Button,Space, Tabs, Popover, Card, InputNumber, Slider,Col,Row,} from "antd";
  import { BsSun, BsMoon } from "react-icons/bs";
  import { ChromePicker } from "react-color";
  import useStore from "../Store/Store"
  function CTheme() {
    const SetTheme = useStore((state) => state.settheme);
    const Bgcolor = useStore((state) => state.setBgcolor);
    const SetBgcolor = useStore((state) => state.setBgcolor);
    // const TextColor = useStore((state) => state.ColorText);
    const Textcolor = useStore((state) => state.TextColor)
    const SetTextcolor = useStore((state) => state.setTextcolor);
    const SidebarColor = useStore((state) => state.SidebarColor);
    const SetSidebarcolor = useStore((state) => state.SetSidebarcolor);
    const HeaderColor = useStore((state) => state.HeaderColor);
    const SetHeadercolor = useStore((state) => state.SetHeadercolor);
    const BorderColor = useStore((state) => state.BorderColor);
    const SetBorderColor = useStore((state) => state.SetBorderColor);
    const FontSize = useStore((state) => state.FontSize);
    const SetFontSize = useStore((state) => state.SetFontSize);
    const BorderSize = useStore((state) => state.BorderSize);
    const SetBorderSize = useStore((state) => state.SetBorderSize);
    const IconColor=useStore((state) => state.IconColor);
    const SetIconColor = useStore((state) => state.SetIconColor);
    const Theme = useStore((state) => state.Theme);
    return (
      <div>
        <div className="flex justify-center ">
          <Space>
            <Button
              type="default"
              size="large"
              icon={<BsSun />}
              onClick={() => {
                SetTheme(false);
                SetBorderColor("#f0f0f0");
                SetHeadercolor("#ffffff");
              }}
            />
            <Button
              type="default"
              size="large"
              icon={<BsMoon />}
              onClick={() => {
                SetTheme(true);
                SetBorderColor("#303030");
                SetHeadercolor("#141414");
              }}
            />
          </Space>
        </div>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Colors",
              key: "1",
              children: (
                <Space direction="vertical" className="flex justify-center">
                  <div className="flex justify-around">
                    <div>
                      <Popover
                        content={
                          <ChromePicker
                            color={Bgcolor}
                            onChangeComplete={(color) => {
                              SetBgcolor(color.hex);
                            }}
                          />
                        }
                        trigger="hover"
                      >
                        <Space>
                          <label>Change background</label>
                          <Card size="small">
                            <div
                              style={{
                                backgroundColor: Bgcolor,
                                width: "48px",
                                height: "32px",
                                borderRadius: "4px",
                                boxShadow: "0px 0px 4px 0px",
                              }}
                            ></div>
                          </Card>
                        </Space>
                      </Popover>
                      <Button type="link" onClick={() => SetBgcolor("")}>
                        Reset
                      </Button>
                    </div>
                    <div>
                      <Popover
                        content={
                          
                          <ChromePicker
                            color={Textcolor}
                            onChangeComplete={(color) => {
                              SetTextcolor(color.hex);
                            }}
                          />
                        }
                        trigger="hover"
                      >
                        <Space>
                          <label>Font Color</label>
                          <Card size="small">
                            <div
                              style={{
                                backgroundColor: Textcolor,
                                width: "48px",
                                height: "32px",
                                borderRadius: "4px",
                                boxShadow: "0px 0px 4px 0px",
                              }}
                            ></div>
                          </Card>
                        </Space>
                      </Popover>
                      <Button type="link" onClick={() => SetTextcolor("")}>
                        Reset
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div>
                      <Popover
                        content={
                          <ChromePicker
                            color={SidebarColor}
                            onChangeComplete={(color) => {
                              SetSidebarcolor(color.hex);
                            }}
                          />
                        }
                        trigger="hover"
                      >
                        <Space>
                          <label>Side Bar</label>
                          <Card size="small">
                            <div
                              style={{
                                backgroundColor: SidebarColor,
                                width: "48px",
                                height: "32px",
                                borderRadius: "4px",
                                boxShadow: "0px 0px 4px 0px",
                              }}
                            ></div>
                          </Card>
                        </Space>
                      </Popover>
                      <Button type="link" onClick={() => SetSidebarcolor("")}>
                        Reset
                      </Button>
                    </div>
                    <div>
                      <Popover
                        content={
                          <ChromePicker
                            color={HeaderColor}
                            onChangeComplete={(color) => {
                              SetHeadercolor(color.hex);
                            }}
                          />
                        }
                        trigger="hover"
                      >
                        <Space>
                          <label>Main title</label>
                          <Card size="small">
                            <div
                              style={{
                                backgroundColor: HeaderColor,
                                width: "48px",
                                height: "32px",
                                borderRadius: "4px",
                                boxShadow: "0px 0px 4px 0px",
                              }}
                            ></div>
                          </Card>
                        </Space>
                      </Popover>
                      <Button
                        type="link"
                        onClick={() => {
                          Theme
                            ? SetHeadercolor("#ffffff")
                            : SetHeadercolor("#141414");
                        }}
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div>
                      <Popover
                        content={
                          <ChromePicker
                            color={BorderColor}
                            onChangeComplete={(color) => {
                              SetBorderColor(color.hex);
                            }}
                          />
                        }
                        trigger="hover"
                      >
                        <Space>
                          <label>Board color</label>
                          <Card size="small">
                            <div
                              style={{
                                backgroundColor: BorderColor,
                                width: "48px",
                                height: "32px",
                                borderRadius: "4px",
                                boxShadow: "0px 0px 4px 0px",
                              }}
                            ></div>
                          </Card>
                        </Space>
                      </Popover>
                      <Button
                        type="link"
                        onClick={() =>
                          Theme
                            ? SetBorderColor("#f0f0f0")
                            : SetBorderColor("#303030")
                        }
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                </Space>
              ),
            },
            {
              label: "Size Options",
              key: "2",
              children: (
                <div>
                  <div>
                    <div>
                      <Row className="flex items-center">
                        <Col span={4}>
                          <label>Font Size</label>
                        </Col>
                        <Col span={8}>
                          <Slider
                            className="ml-4"
                            min={12}
                            max={22}
                            step={1}
                            onChange={(value) => SetFontSize(value)}
                            value={FontSize}
                          />
                        </Col>
                        <Col span={4}>
                          <InputNumber
                            // className="mr-4"
                            min={12}
                            max={22}
                            step={1}
                            value={FontSize}
                            onChange={(value) => SetFontSize(value)}
                          />
                        </Col>
                        <Col span={8}>
                          <Button
                            // className="mr-4"
                            type="link"
                            onClick={() => SetFontSize(14)}
                          >
                            Reset
                          </Button>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row className="flex items-center">
                        <Col span={4}>
                          <label>Border Raidus</label>
                        </Col>
                        <Col span={8}>
                          <Slider
                            className="ml-4"
                            min={0}
                            max={16}
                            onChange={(value) => SetBorderSize(value)}
                            value={BorderSize}
                          />
                        </Col>
                        <Col span={4}>
                          <InputNumber
                            min={0}
                            max={16}
                            value={BorderSize}
                            onChange={(value) => SetBorderSize(value)}
                          />
                        </Col>
                        <Col span={8}>
                          <Button type="link" onClick={() => SetBorderSize(6)}>
                            Reset
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    );
  }
  export default CTheme;
  